#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <Zycore/LibC.h>
#include <Zydis/Zydis.h>


#ifdef __INTELLISENSE__
#define ZYJS_THROW(n) 
#define ZYJS_THROW_STR(s) 
#else
#include <emscripten.h>
#define ZYJS_THROW(n) \
EM_ASM({ \
  throw 'Zydis error: ' + $0.toString(16); \
}, (n&~0x80000000));
#define ZYJS_THROW_STR(s) \
EM_ASM({ \
  throw 'Zyjs error: ' + $0; \
}, s);
#endif

#define ZYJS_EXPORT __attribute__((used)) 

#define ZYJS_ACCESOR(Namespace, Object, Type, Field, FieldName) \
   ZYJS_EXPORT Type zyjs##Namespace##Get_##FieldName(Object* obj) {return Field;} \
   ZYJS_EXPORT void zyjs##Namespace##Set_##FieldName(Object* obj, Type value) {Field = value;}
#define ZYJS_ACCESOR_RO(Namespace, Object, Type, Field, FieldName) \
   ZYJS_EXPORT Type zyjs##Namespace##Get_##FieldName(Object* obj) {return Field;}

// Decoder.
//
ZYJS_EXPORT ZydisDecoder* zyjsNewDecoder(ZydisMachineMode machine_mode, ZydisStackWidth stack_width) {
   ZydisDecoder* decoder = malloc(sizeof(ZydisDecoder));
   ZyanStatus status = ZydisDecoderInit(decoder, machine_mode, stack_width);
   if (ZYAN_FAILED(status)) {
      free(decoder);
      ZYJS_THROW(status);
   }
   return decoder;
}
ZYJS_EXPORT void zyjsDecoderSetMode(ZydisDecoder* decoder, ZydisDecoderMode mode, ZyanBool enabled) {
   ZyanStatus status = ZydisDecoderEnableMode(decoder, mode, enabled);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
}
typedef struct ZyjsDecInstruction_ {
   ZydisDecodedInstruction insn;
   ZydisDecodedOperand operands[ZYDIS_MAX_OPERAND_COUNT];
} ZyjsDecInstruction;
ZYJS_EXPORT ZyjsDecInstruction* zyjsDecoderDecode(ZydisDecoder* decoder, const void* buffer, ZyanUSize length) {
   ZyjsDecInstruction* insn = malloc(sizeof(ZyjsDecInstruction));
   ZyanStatus status = ZydisDecoderDecodeFull(decoder, buffer, length, &insn->insn, insn->operands);
   if (ZYAN_FAILED(status)) {
      free(insn);
      ZYJS_THROW(status);
   }
   return insn;
}

// Encoder.
//
ZYJS_EXPORT ZydisEncoderRequest* zyjsNewEncReq(const ZyjsDecInstruction* from) {
   ZydisEncoderRequest* req = malloc(sizeof(ZydisEncoderRequest));
   memset(req, 0, sizeof(ZydisEncoderRequest));
   if (from) {
      ZyanStatus status = ZydisEncoderDecodedInstructionToEncoderRequest(&from->insn, from->operands, from->insn.operand_count_visible, req);
      if (ZYAN_FAILED(status)) {
         free(req);
         ZYJS_THROW(status);
      }
   }
   return req;
}
ZYJS_EXPORT ZyanU32 zyjsEncReqEncode(ZydisEncoderRequest* req, ZyanU8* out) {
   ZyanUSize length = ZYDIS_MAX_INSTRUCTION_LENGTH;
   ZyanStatus status = ZydisEncoderEncodeInstruction(req, out, &length);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
   return (ZyanU32) length;
}
ZYJS_EXPORT ZyanU32 zyjsEncReqEncodeAbs(ZydisEncoderRequest* req, ZyanU8* out, ZyanU64 runtime_address) {
   ZyanUSize length = ZYDIS_MAX_INSTRUCTION_LENGTH;
   ZyanStatus status = ZydisEncoderEncodeInstructionAbsolute(req, out, &length, runtime_address);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
   return (ZyanU32) length;
}
ZYJS_EXPORT void zyjsEncNop(ZyanU8* out, ZyanU32 length) {
   ZyanStatus status = ZydisEncoderNopFill(out, length);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
}

// Formatter.
//
ZYJS_EXPORT ZydisFormatter* zyjsNewFormatter(ZydisFormatterStyle style) {
   ZydisFormatter* formatter = malloc(sizeof(ZydisFormatter));
   ZyanStatus status = ZydisFormatterInit(formatter, style);
   if (ZYAN_FAILED(status)) {
      free(formatter);
      ZYJS_THROW(status);
   }
   return formatter;
}
ZYJS_EXPORT void zyjsFormatterSetProperty(ZydisFormatter* formatter, ZydisFormatterProperty prop, ZyanU32 value) {
   ZyanStatus status = ZydisFormatterSetProperty(formatter, prop, value);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
}
ZYJS_EXPORT void zyjsFormatterFormatInsn(ZydisFormatter* formatter, char* buffer, ZyanU32 size, ZyjsDecInstruction* insn, ZyanU64 address) {
   ZyanStatus status = ZydisFormatterFormatInstruction(formatter, &insn->insn, insn->operands, insn->insn.operand_count_visible, buffer, size, address, NULL);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
}
ZYJS_EXPORT void zyjsFormatterFormatOperand(ZydisFormatter* formatter, char* buffer, ZyanU32 size, ZyjsDecInstruction* insn, const ZydisDecodedOperand* op, ZyanU64 address) {
   ZyanStatus status = ZydisFormatterFormatOperand(formatter, &insn->insn, op, buffer, size, address, NULL);
   if (ZYAN_FAILED(status)) {
      ZYJS_THROW(status);
   }
}

// Registers.
//
ZYJS_EXPORT ZydisRegister zyjsRegisterEncode(ZydisRegisterClass register_class, ZyanU8 id) {
   return ZydisRegisterEncode(register_class, id);
}
ZYJS_EXPORT ZyanI8 zyjsRegisterGetId(ZydisRegister reg) {
   return ZydisRegisterGetId(reg);
}
ZYJS_EXPORT ZydisRegisterClass zyjsRegisterGetClass(ZydisRegister reg) {
   return ZydisRegisterGetClass(reg);
}
ZYJS_EXPORT ZydisRegisterWidth zyjsRegisterGetWidth(ZydisRegister reg, ZydisMachineMode mode) {
   return ZydisRegisterGetWidth(mode, reg);
}
ZYJS_EXPORT ZydisRegisterWidth zyjsRegisterClassGetWidth(ZydisRegisterClass register_class, ZydisMachineMode mode) {
   return ZydisRegisterClassGetWidth(mode, register_class);
}
ZYJS_EXPORT ZydisRegister zyjsRegisterGetLargestEnclosing(ZydisRegister reg, ZydisMachineMode mode) {
   return ZydisRegisterGetLargestEnclosing(mode, reg);
}


// DecInsn.
//
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisMnemonic,              obj->insn.mnemonic,              mnemonic)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.length,                length)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisInstructionEncoding,   obj->insn.encoding,              encoding)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisOpcodeMap,             obj->insn.opcode_map,            opcodeMap)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.opcode,                opcode)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.stack_width,           stackWidth)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.operand_width,         operandWidth)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.address_width,         addressWidth)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.operand_count,         operandCount)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU8,                     obj->insn.operand_count_visible, visibleOperandCount)
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisInstructionAttributes, obj->insn.attributes,            attributes) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, const void*,                obj->insn.cpu_flags,             cpuFlagsPtr) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, const void*,                obj->insn.fpu_flags,             fpuFlagsPtr) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisInstructionCategory,   obj->insn.meta.category,         category) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisISASet,                obj->insn.meta.isa_set,          isaSet) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisISAExt,                obj->insn.meta.isa_ext,          isaExt) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisBranchType,            obj->insn.meta.branch_type,      branchType) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisExceptionClass,        obj->insn.meta.exception_class,  exceptionClass) 

ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanU16,                    obj->insn.avx.vector_length,       vectorLength) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisMaskMode,              obj->insn.avx.mask.mode,           maskMode) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisRegister,              obj->insn.avx.mask.reg,            maskReg) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanBool,                   obj->insn.avx.broadcast.is_static, isBroadcastStatic) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisBroadcastMode,         obj->insn.avx.broadcast.mode,      broadcastMode) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisRoundingMode,          obj->insn.avx.rounding.mode,       roundingMode) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisSwizzleMode,           obj->insn.avx.swizzle.mode,        swizzleMode) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZydisConversionMode,        obj->insn.avx.conversion.mode,     conversionMode) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanBool,                   obj->insn.avx.has_sae,             hasSAE) 
ZYJS_ACCESOR(DecInsn, ZyjsDecInstruction, ZyanBool,                   obj->insn.avx.has_eviction_hint,   hasEvictionHint)
// TODO: .raw
ZYJS_EXPORT ZydisDecodedOperand* zyjsDecInsnRefOperand(ZyjsDecInstruction* insn, ZyanU32 index) {
   if (index >= insn->insn.operand_count) {
      return NULL;
   }
   return &insn->operands[index];
}

// DecOp.
//
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU8,                      obj->id,              id)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisOperandVisibility,      obj->visibility,      visiblity)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisOperandActions,         obj->actions,         actions)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisOperandEncoding,        obj->encoding,        encoding)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU16,                     obj->size,            size)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisElementType,            obj->element_type,    elementType)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisElementSize,            obj->element_size,    elementSize)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU16,                     obj->element_count,   elementCount)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisOperandAttributes,      obj->attributes,      attributes)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisOperandType,            obj->type,            type)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanBool,                    obj->imm.is_signed,   immSigned)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanBool,                    obj->imm.is_relative, immRelative)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanI64,                     obj->imm.value.s,     imms)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU64,                     obj->imm.value.u,     immu)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU16,                     obj->ptr.segment,     ptrSeg)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU32,                     obj->ptr.offset,      ptrOff)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisRegister,               obj->reg.value,       regv)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisMemoryOperandType,      obj->mem.type,                        memType)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisRegister,               obj->mem.segment,                     memSeg)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisRegister,               obj->mem.base,                        memBase)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZydisRegister,               obj->mem.index,                       memIndex)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanU8,                      obj->mem.scale,                       memScale)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanBool,                    obj->mem.disp.has_displacement,       memHasDisp)
ZYJS_ACCESOR(DecOp, ZydisDecodedOperand, ZyanI64,                     obj->mem.disp.value,                  memDisp)

// EncOp.
//
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZydisOperandType,            obj->type,                     type)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanI64,                     obj->imm.s,                    imms)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanU64,                     obj->imm.u,                    immu)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanU16,                     obj->ptr.segment,              ptrSeg)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanU32,                     obj->ptr.offset,               ptrOff)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZydisRegister,               obj->reg.value,                regv)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanBool,                    obj->reg.is4,                  regIs4)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZydisRegister,               obj->mem.base,                 memBase)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZydisRegister,               obj->mem.index,                memIndex)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanU8,                      obj->mem.scale,                memScale)
ZYJS_ACCESOR(EncOp,  ZydisEncoderOperand, ZyanI64,                     obj->mem.displacement,         memDisp)

// EncReq.
//
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisMachineMode,            obj->machine_mode,             machineMode)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisEncodableEncoding,      obj->allowed_encodings,        allowedEncodings)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisMnemonic,               obj->mnemonic,                 mnemonic)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisInstructionAttributes,  obj->prefixes,                 prefixes)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisBranchType,             obj->branch_type,              branchType)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisBranchWidth,            obj->branch_width,             branchWidth)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisAddressSizeHint,        obj->address_size_hint,        addressSizeHint)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisOperandSizeHint,        obj->operand_size_hint,        operandSizeHint)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZyanU8,                      obj->operand_count,            operandCount)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisBroadcastMode,          obj->evex.broadcast,           evexBroadcast)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisRoundingMode,           obj->evex.rounding,            evexRounding)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZyanBool,                    obj->evex.sae,                 evexSAE)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZyanBool,                    obj->evex.zeroing_mask,        evexZeroingMask)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisBroadcastMode,          obj->mvex.broadcast,           mvexBroadcast)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisRoundingMode,           obj->mvex.rounding,            mvexRounding)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZyanBool,                    obj->mvex.sae,                 mvexSAE)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisConversionMode,         obj->mvex.conversion,          mvexConversion)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZydisSwizzleMode,            obj->mvex.swizzle,             mvexSwizzle)
ZYJS_ACCESOR(EncReq, ZydisEncoderRequest, ZyanBool,                    obj->mvex.eviction_hint,       mvexEvictionHint)
ZYJS_EXPORT ZydisEncoderOperand* zyjsEncReqRefOperand(ZydisEncoderRequest* insn, ZyanU32 index) {
   if (index >= ZYDIS_ENCODER_MAX_OPERANDS) {
      return NULL;
   }
   return &insn->operands[index];
}

// AccessedFlags.
//
ZYJS_ACCESOR_RO(FlagSet,  ZydisAccessedFlags, ZydisAccessedFlagsMask,  obj->tested,    tested)
ZYJS_ACCESOR_RO(FlagSet,  ZydisAccessedFlags, ZydisAccessedFlagsMask,  obj->modified,  modified)
ZYJS_ACCESOR_RO(FlagSet,  ZydisAccessedFlags, ZydisAccessedFlagsMask,  obj->set_0,     unset)
ZYJS_ACCESOR_RO(FlagSet,  ZydisAccessedFlags, ZydisAccessedFlagsMask,  obj->set_1,     set)
ZYJS_ACCESOR_RO(FlagSet,  ZydisAccessedFlags, ZydisAccessedFlagsMask,  obj->undefined, undef)

// Misc.
//
ZYJS_EXPORT ZyanU16 zyjsGetMajorVersion() {
   return ZYDIS_VERSION_MAJOR(ZydisGetVersion());
}
ZYJS_EXPORT ZyanU16 zyjsGetMinorVersion() {
   return ZYDIS_VERSION_MINOR(ZydisGetVersion());
}
ZYJS_EXPORT ZyanU16 zyjsGetPatchVersion() {
   return ZYDIS_VERSION_PATCH(ZydisGetVersion());
}
ZYJS_EXPORT ZyanU16 zyjsGetBuildVersion() {
   return ZYDIS_VERSION_BUILD(ZydisGetVersion());
}
ZYJS_EXPORT ZyanBool zyjsHasFeature(ZydisFeature f) {
   return ZydisIsFeatureEnabled(f) == ZYAN_STATUS_TRUE;
}

int main() {
   return 0;
}