export enum MachineMode {
	/**
	 * 64 bit mode.
	 */
	LONG_64,
	/**
	 * 32 bit protected mode.
	 */
	LONG_COMPAT_32,
	/**
	 * 16 bit protected mode.
	 */
	LONG_COMPAT_16,
	/**
	 * 32 bit protected mode.
	 */
	LEGACY_32,
	/**
	 * 16 bit protected mode.
	 */
	LEGACY_16,
	/**
	 * 16 bit real mode.
	 */
	REAL_16,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = REAL_16,
}
export enum StackWidth {
	WIDTH_16,
	WIDTH_32,
	WIDTH_64,

	/**
	 * Maximum value of this enum.
	 */
	WIDTH_, // MAX_VALUE = WIDTH_64,
}
export enum DecoderMode {
	/**
	 * Enables minimal instruction decoding without semantic analysis.
	 *
	 * This mode provides access to the mnemonic, the instruction-length, the effective
	 * operand-size, the effective address-width, some attributes (e.g. `ZYDIS_ATTRIB_IS_RELATIVE`)
	 * and all of the information in the `raw` field of the `ZydisDecodedInstruction` struct.
	 *
	 * Operands, most attributes and other specific information (like `AVX` info) are not
	 * accessible in this mode.
	 *
	 * This mode is NOT enabled by default.
	 */
	MINIMAL,
	/**
	 * Enables the `AMD`-branch mode.
	 *
	 * Intel ignores the operand-size override-prefix (`0x66`) for all branches with 32-bit
	 * immediates and forces the operand-size of the instruction to 64-bit in 64-bit mode.
	 * In `AMD`-branch mode `0x66` is not ignored and changes the operand-size and the size of the
	 * immediate to 16-bit.
	 *
	 * This mode is NOT enabled by default.
	 */
	AMD_BRANCHES,
	/**
	 * Enables `KNC` compatibility-mode.
	 *
	 * `KNC` and `KNL+` chips are sharing opcodes and encodings for some mask-related instructions.
	 * Enable this mode to use the old `KNC` specifications (different mnemonics, operands, ..).
	 *
	 * This mode is NOT enabled by default.
	 */
	KNC,
	/**
	 * Enables the `MPX` mode.
	 *
	 * The `MPX` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	MPX,
	/**
	 * Enables the `CET` mode.
	 *
	 * The `CET` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	CET,
	/**
	 * Enables the `LZCNT` mode.
	 *
	 * The `LZCNT` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	LZCNT,
	/**
	 * Enables the `TZCNT` mode.
	 *
	 * The `TZCNT` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	TZCNT,
	/**
	 * Enables the `WBNOINVD` mode.
	 *
	 * The `WBINVD` instruction is interpreted as `WBNOINVD` on ICL chips, if a `F3` prefix is
	 * used.
	 *
	 * This mode is disabled by default.
	 */
	WBNOINVD,
	/**
	 * Enables the `CLDEMOTE` mode.
	 *
	 * The `CLDEMOTE` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	CLDEMOTE,
	/**
	 * Enables the `IPREFETCH` mode.
	 *
	 * The `IPREFETCH` isa-extension reuses (overrides) some of the widenop instruction opcodes.
	 *
	 * This mode is enabled by default.
	 */
	IPREFETCH,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = IPREFETCH,
}
/**
 * Defines the `ZydisMnemonic` enum.
 */
export enum Mnemonic {
	INVALID,
	AAA,
	AAD,
	AADD,
	AAM,
	AAND,
	AAS,
	ADC,
	ADCX,
	ADD,
	ADDPD,
	ADDPS,
	ADDSD,
	ADDSS,
	ADDSUBPD,
	ADDSUBPS,
	ADOX,
	AESDEC,
	AESDEC128KL,
	AESDEC256KL,
	AESDECLAST,
	AESDECWIDE128KL,
	AESDECWIDE256KL,
	AESENC,
	AESENC128KL,
	AESENC256KL,
	AESENCLAST,
	AESENCWIDE128KL,
	AESENCWIDE256KL,
	AESIMC,
	AESKEYGENASSIST,
	AND,
	ANDN,
	ANDNPD,
	ANDNPS,
	ANDPD,
	ANDPS,
	AOR,
	ARPL,
	AXOR,
	BEXTR,
	BLCFILL,
	BLCI,
	BLCIC,
	BLCMSK,
	BLCS,
	BLENDPD,
	BLENDPS,
	BLENDVPD,
	BLENDVPS,
	BLSFILL,
	BLSI,
	BLSIC,
	BLSMSK,
	BLSR,
	BNDCL,
	BNDCN,
	BNDCU,
	BNDLDX,
	BNDMK,
	BNDMOV,
	BNDSTX,
	BOUND,
	BSF,
	BSR,
	BSWAP,
	BT,
	BTC,
	BTR,
	BTS,
	BZHI,
	CALL,
	CBW,
	CDQ,
	CDQE,
	CLAC,
	CLC,
	CLD,
	CLDEMOTE,
	CLEVICT0,
	CLEVICT1,
	CLFLUSH,
	CLFLUSHOPT,
	CLGI,
	CLI,
	CLRSSBSY,
	CLTS,
	CLUI,
	CLWB,
	CLZERO,
	CMC,
	CMOVB,
	CMOVBE,
	CMOVL,
	CMOVLE,
	CMOVNB,
	CMOVNBE,
	CMOVNL,
	CMOVNLE,
	CMOVNO,
	CMOVNP,
	CMOVNS,
	CMOVNZ,
	CMOVO,
	CMOVP,
	CMOVS,
	CMOVZ,
	CMP,
	CMPPD,
	CMPPS,
	CMPSB,
	CMPSD,
	CMPSQ,
	CMPSS,
	CMPSW,
	CMPXCHG,
	CMPXCHG16B,
	CMPXCHG8B,
	COMISD,
	COMISS,
	CPUID,
	CQO,
	CRC32,
	CVTDQ2PD,
	CVTDQ2PS,
	CVTPD2DQ,
	CVTPD2PI,
	CVTPD2PS,
	CVTPI2PD,
	CVTPI2PS,
	CVTPS2DQ,
	CVTPS2PD,
	CVTPS2PI,
	CVTSD2SI,
	CVTSD2SS,
	CVTSI2SD,
	CVTSI2SS,
	CVTSS2SD,
	CVTSS2SI,
	CVTTPD2DQ,
	CVTTPD2PI,
	CVTTPS2DQ,
	CVTTPS2PI,
	CVTTSD2SI,
	CVTTSS2SI,
	CWD,
	CWDE,
	DAA,
	DAS,
	DEC,
	DELAY,
	DIV,
	DIVPD,
	DIVPS,
	DIVSD,
	DIVSS,
	DPPD,
	DPPS,
	EMMS,
	ENCLS,
	ENCLU,
	ENCLV,
	ENCODEKEY128,
	ENCODEKEY256,
	ENDBR32,
	ENDBR64,
	ENQCMD,
	ENQCMDS,
	ENTER,
	EXTRACTPS,
	EXTRQ,
	F2XM1,
	FABS,
	FADD,
	FADDP,
	FBLD,
	FBSTP,
	FCHS,
	FCMOVB,
	FCMOVBE,
	FCMOVE,
	FCMOVNB,
	FCMOVNBE,
	FCMOVNE,
	FCMOVNU,
	FCMOVU,
	FCOM,
	FCOMI,
	FCOMIP,
	FCOMP,
	FCOMPP,
	FCOS,
	FDECSTP,
	FDISI8087_NOP,
	FDIV,
	FDIVP,
	FDIVR,
	FDIVRP,
	FEMMS,
	FENI8087_NOP,
	FFREE,
	FFREEP,
	FIADD,
	FICOM,
	FICOMP,
	FIDIV,
	FIDIVR,
	FILD,
	FIMUL,
	FINCSTP,
	FIST,
	FISTP,
	FISTTP,
	FISUB,
	FISUBR,
	FLD,
	FLD1,
	FLDCW,
	FLDENV,
	FLDL2E,
	FLDL2T,
	FLDLG2,
	FLDLN2,
	FLDPI,
	FLDZ,
	FMUL,
	FMULP,
	FNCLEX,
	FNINIT,
	FNOP,
	FNSAVE,
	FNSTCW,
	FNSTENV,
	FNSTSW,
	FPATAN,
	FPREM,
	FPREM1,
	FPTAN,
	FRNDINT,
	FRSTOR,
	FSCALE,
	FSETPM287_NOP,
	FSIN,
	FSINCOS,
	FSQRT,
	FST,
	FSTP,
	FSTPNCE,
	FSUB,
	FSUBP,
	FSUBR,
	FSUBRP,
	FTST,
	FUCOM,
	FUCOMI,
	FUCOMIP,
	FUCOMP,
	FUCOMPP,
	FWAIT,
	FXAM,
	FXCH,
	FXRSTOR,
	FXRSTOR64,
	FXSAVE,
	FXSAVE64,
	FXTRACT,
	FYL2X,
	FYL2XP1,
	GETSEC,
	GF2P8AFFINEINVQB,
	GF2P8AFFINEQB,
	GF2P8MULB,
	HADDPD,
	HADDPS,
	HLT,
	HRESET,
	HSUBPD,
	HSUBPS,
	IDIV,
	IMUL,
	IN,
	INC,
	INCSSPD,
	INCSSPQ,
	INSB,
	INSD,
	INSERTPS,
	INSERTQ,
	INSW,
	INT,
	INT1,
	INT3,
	INTO,
	INVD,
	INVEPT,
	INVLPG,
	INVLPGA,
	INVLPGB,
	INVPCID,
	INVVPID,
	IRET,
	IRETD,
	IRETQ,
	JB,
	JBE,
	JCXZ,
	JECXZ,
	JKNZD,
	JKZD,
	JL,
	JLE,
	JMP,
	JNB,
	JNBE,
	JNL,
	JNLE,
	JNO,
	JNP,
	JNS,
	JNZ,
	JO,
	JP,
	JRCXZ,
	JS,
	JZ,
	KADDB,
	KADDD,
	KADDQ,
	KADDW,
	KAND,
	KANDB,
	KANDD,
	KANDN,
	KANDNB,
	KANDND,
	KANDNQ,
	KANDNR,
	KANDNW,
	KANDQ,
	KANDW,
	KCONCATH,
	KCONCATL,
	KEXTRACT,
	KMERGE2L1H,
	KMERGE2L1L,
	KMOV,
	KMOVB,
	KMOVD,
	KMOVQ,
	KMOVW,
	KNOT,
	KNOTB,
	KNOTD,
	KNOTQ,
	KNOTW,
	KOR,
	KORB,
	KORD,
	KORQ,
	KORTEST,
	KORTESTB,
	KORTESTD,
	KORTESTQ,
	KORTESTW,
	KORW,
	KSHIFTLB,
	KSHIFTLD,
	KSHIFTLQ,
	KSHIFTLW,
	KSHIFTRB,
	KSHIFTRD,
	KSHIFTRQ,
	KSHIFTRW,
	KTESTB,
	KTESTD,
	KTESTQ,
	KTESTW,
	KUNPCKBW,
	KUNPCKDQ,
	KUNPCKWD,
	KXNOR,
	KXNORB,
	KXNORD,
	KXNORQ,
	KXNORW,
	KXOR,
	KXORB,
	KXORD,
	KXORQ,
	KXORW,
	LAHF,
	LAR,
	LDDQU,
	LDMXCSR,
	LDS,
	LDTILECFG,
	LEA,
	LEAVE,
	LES,
	LFENCE,
	LFS,
	LGDT,
	LGS,
	LIDT,
	LLDT,
	LLWPCB,
	LMSW,
	LOADIWKEY,
	LODSB,
	LODSD,
	LODSQ,
	LODSW,
	LOOP,
	LOOPE,
	LOOPNE,
	LSL,
	LSS,
	LTR,
	LWPINS,
	LWPVAL,
	LZCNT,
	MASKMOVDQU,
	MASKMOVQ,
	MAXPD,
	MAXPS,
	MAXSD,
	MAXSS,
	MCOMMIT,
	MFENCE,
	MINPD,
	MINPS,
	MINSD,
	MINSS,
	MONITOR,
	MONITORX,
	MONTMUL,
	MOV,
	MOVAPD,
	MOVAPS,
	MOVBE,
	MOVD,
	MOVDDUP,
	MOVDIR64B,
	MOVDIRI,
	MOVDQ2Q,
	MOVDQA,
	MOVDQU,
	MOVHLPS,
	MOVHPD,
	MOVHPS,
	MOVLHPS,
	MOVLPD,
	MOVLPS,
	MOVMSKPD,
	MOVMSKPS,
	MOVNTDQ,
	MOVNTDQA,
	MOVNTI,
	MOVNTPD,
	MOVNTPS,
	MOVNTQ,
	MOVNTSD,
	MOVNTSS,
	MOVQ,
	MOVQ2DQ,
	MOVSB,
	MOVSD,
	MOVSHDUP,
	MOVSLDUP,
	MOVSQ,
	MOVSS,
	MOVSW,
	MOVSX,
	MOVSXD,
	MOVUPD,
	MOVUPS,
	MOVZX,
	MPSADBW,
	MUL,
	MULPD,
	MULPS,
	MULSD,
	MULSS,
	MULX,
	MWAIT,
	MWAITX,
	NEG,
	NOP,
	NOT,
	OR,
	ORPD,
	ORPS,
	OUT,
	OUTSB,
	OUTSD,
	OUTSW,
	PABSB,
	PABSD,
	PABSW,
	PACKSSDW,
	PACKSSWB,
	PACKUSDW,
	PACKUSWB,
	PADDB,
	PADDD,
	PADDQ,
	PADDSB,
	PADDSW,
	PADDUSB,
	PADDUSW,
	PADDW,
	PALIGNR,
	PAND,
	PANDN,
	PAUSE,
	PAVGB,
	PAVGUSB,
	PAVGW,
	PBLENDVB,
	PBLENDW,
	PCLMULQDQ,
	PCMPEQB,
	PCMPEQD,
	PCMPEQQ,
	PCMPEQW,
	PCMPESTRI,
	PCMPESTRM,
	PCMPGTB,
	PCMPGTD,
	PCMPGTQ,
	PCMPGTW,
	PCMPISTRI,
	PCMPISTRM,
	PCOMMIT,
	PCONFIG,
	PDEP,
	PEXT,
	PEXTRB,
	PEXTRD,
	PEXTRQ,
	PEXTRW,
	PF2ID,
	PF2IW,
	PFACC,
	PFADD,
	PFCMPEQ,
	PFCMPGE,
	PFCMPGT,
	PFCPIT1,
	PFMAX,
	PFMIN,
	PFMUL,
	PFNACC,
	PFPNACC,
	PFRCP,
	PFRCPIT2,
	PFRSQIT1,
	PFSQRT,
	PFSUB,
	PFSUBR,
	PHADDD,
	PHADDSW,
	PHADDW,
	PHMINPOSUW,
	PHSUBD,
	PHSUBSW,
	PHSUBW,
	PI2FD,
	PI2FW,
	PINSRB,
	PINSRD,
	PINSRQ,
	PINSRW,
	PMADDUBSW,
	PMADDWD,
	PMAXSB,
	PMAXSD,
	PMAXSW,
	PMAXUB,
	PMAXUD,
	PMAXUW,
	PMINSB,
	PMINSD,
	PMINSW,
	PMINUB,
	PMINUD,
	PMINUW,
	PMOVMSKB,
	PMOVSXBD,
	PMOVSXBQ,
	PMOVSXBW,
	PMOVSXDQ,
	PMOVSXWD,
	PMOVSXWQ,
	PMOVZXBD,
	PMOVZXBQ,
	PMOVZXBW,
	PMOVZXDQ,
	PMOVZXWD,
	PMOVZXWQ,
	PMULDQ,
	PMULHRSW,
	PMULHRW,
	PMULHUW,
	PMULHW,
	PMULLD,
	PMULLW,
	PMULUDQ,
	POP,
	POPA,
	POPAD,
	POPCNT,
	POPF,
	POPFD,
	POPFQ,
	POR,
	PREFETCH,
	PREFETCHIT0,
	PREFETCHIT1,
	PREFETCHNTA,
	PREFETCHT0,
	PREFETCHT1,
	PREFETCHT2,
	PREFETCHW,
	PREFETCHWT1,
	PSADBW,
	PSHUFB,
	PSHUFD,
	PSHUFHW,
	PSHUFLW,
	PSHUFW,
	PSIGNB,
	PSIGND,
	PSIGNW,
	PSLLD,
	PSLLDQ,
	PSLLQ,
	PSLLW,
	PSMASH,
	PSRAD,
	PSRAW,
	PSRLD,
	PSRLDQ,
	PSRLQ,
	PSRLW,
	PSUBB,
	PSUBD,
	PSUBQ,
	PSUBSB,
	PSUBSW,
	PSUBUSB,
	PSUBUSW,
	PSUBW,
	PSWAPD,
	PTEST,
	PTWRITE,
	PUNPCKHBW,
	PUNPCKHDQ,
	PUNPCKHQDQ,
	PUNPCKHWD,
	PUNPCKLBW,
	PUNPCKLDQ,
	PUNPCKLQDQ,
	PUNPCKLWD,
	PUSH,
	PUSHA,
	PUSHAD,
	PUSHF,
	PUSHFD,
	PUSHFQ,
	PVALIDATE,
	PXOR,
	RCL,
	RCPPS,
	RCPSS,
	RCR,
	RDFSBASE,
	RDGSBASE,
	RDMSR,
	RDMSRLIST,
	RDPID,
	RDPKRU,
	RDPMC,
	RDPRU,
	RDRAND,
	RDSEED,
	RDSSPD,
	RDSSPQ,
	RDTSC,
	RDTSCP,
	RET,
	RMPADJUST,
	RMPUPDATE,
	ROL,
	ROR,
	RORX,
	ROUNDPD,
	ROUNDPS,
	ROUNDSD,
	ROUNDSS,
	RSM,
	RSQRTPS,
	RSQRTSS,
	RSTORSSP,
	SAHF,
	SALC,
	SAR,
	SARX,
	SAVEPREVSSP,
	SBB,
	SCASB,
	SCASD,
	SCASQ,
	SCASW,
	SEAMCALL,
	SEAMOPS,
	SEAMRET,
	SENDUIPI,
	SERIALIZE,
	SETB,
	SETBE,
	SETL,
	SETLE,
	SETNB,
	SETNBE,
	SETNL,
	SETNLE,
	SETNO,
	SETNP,
	SETNS,
	SETNZ,
	SETO,
	SETP,
	SETS,
	SETSSBSY,
	SETZ,
	SFENCE,
	SGDT,
	SHA1MSG1,
	SHA1MSG2,
	SHA1NEXTE,
	SHA1RNDS4,
	SHA256MSG1,
	SHA256MSG2,
	SHA256RNDS2,
	SHL,
	SHLD,
	SHLX,
	SHR,
	SHRD,
	SHRX,
	SHUFPD,
	SHUFPS,
	SIDT,
	SKINIT,
	SLDT,
	SLWPCB,
	SMSW,
	SPFLT,
	SQRTPD,
	SQRTPS,
	SQRTSD,
	SQRTSS,
	STAC,
	STC,
	STD,
	STGI,
	STI,
	STMXCSR,
	STOSB,
	STOSD,
	STOSQ,
	STOSW,
	STR,
	STTILECFG,
	STUI,
	SUB,
	SUBPD,
	SUBPS,
	SUBSD,
	SUBSS,
	SWAPGS,
	SYSCALL,
	SYSENTER,
	SYSEXIT,
	SYSRET,
	T1MSKC,
	TDCALL,
	TDPBF16PS,
	TDPBSSD,
	TDPBSUD,
	TDPBUSD,
	TDPBUUD,
	TDPFP16PS,
	TEST,
	TESTUI,
	TILELOADD,
	TILELOADDT1,
	TILERELEASE,
	TILESTORED,
	TILEZERO,
	TLBSYNC,
	TPAUSE,
	TZCNT,
	TZCNTI,
	TZMSK,
	UCOMISD,
	UCOMISS,
	UD0,
	UD1,
	UD2,
	UIRET,
	UMONITOR,
	UMWAIT,
	UNPCKHPD,
	UNPCKHPS,
	UNPCKLPD,
	UNPCKLPS,
	V4FMADDPS,
	V4FMADDSS,
	V4FNMADDPS,
	V4FNMADDSS,
	VADDNPD,
	VADDNPS,
	VADDPD,
	VADDPH,
	VADDPS,
	VADDSD,
	VADDSETSPS,
	VADDSH,
	VADDSS,
	VADDSUBPD,
	VADDSUBPS,
	VAESDEC,
	VAESDECLAST,
	VAESENC,
	VAESENCLAST,
	VAESIMC,
	VAESKEYGENASSIST,
	VALIGND,
	VALIGNQ,
	VANDNPD,
	VANDNPS,
	VANDPD,
	VANDPS,
	VBCSTNEBF162PS,
	VBCSTNESH2PS,
	VBLENDMPD,
	VBLENDMPS,
	VBLENDPD,
	VBLENDPS,
	VBLENDVPD,
	VBLENDVPS,
	VBROADCASTF128,
	VBROADCASTF32X2,
	VBROADCASTF32X4,
	VBROADCASTF32X8,
	VBROADCASTF64X2,
	VBROADCASTF64X4,
	VBROADCASTI128,
	VBROADCASTI32X2,
	VBROADCASTI32X4,
	VBROADCASTI32X8,
	VBROADCASTI64X2,
	VBROADCASTI64X4,
	VBROADCASTSD,
	VBROADCASTSS,
	VCMPPD,
	VCMPPH,
	VCMPPS,
	VCMPSD,
	VCMPSH,
	VCMPSS,
	VCOMISD,
	VCOMISH,
	VCOMISS,
	VCOMPRESSPD,
	VCOMPRESSPS,
	VCVTDQ2PD,
	VCVTDQ2PH,
	VCVTDQ2PS,
	VCVTFXPNTDQ2PS,
	VCVTFXPNTPD2DQ,
	VCVTFXPNTPD2UDQ,
	VCVTFXPNTPS2DQ,
	VCVTFXPNTPS2UDQ,
	VCVTFXPNTUDQ2PS,
	VCVTNE2PS2BF16,
	VCVTNEEBF162PS,
	VCVTNEEPH2PS,
	VCVTNEOBF162PS,
	VCVTNEOPH2PS,
	VCVTNEPS2BF16,
	VCVTPD2DQ,
	VCVTPD2PH,
	VCVTPD2PS,
	VCVTPD2QQ,
	VCVTPD2UDQ,
	VCVTPD2UQQ,
	VCVTPH2DQ,
	VCVTPH2PD,
	VCVTPH2PS,
	VCVTPH2PSX,
	VCVTPH2QQ,
	VCVTPH2UDQ,
	VCVTPH2UQQ,
	VCVTPH2UW,
	VCVTPH2W,
	VCVTPS2DQ,
	VCVTPS2PD,
	VCVTPS2PH,
	VCVTPS2PHX,
	VCVTPS2QQ,
	VCVTPS2UDQ,
	VCVTPS2UQQ,
	VCVTQQ2PD,
	VCVTQQ2PH,
	VCVTQQ2PS,
	VCVTSD2SH,
	VCVTSD2SI,
	VCVTSD2SS,
	VCVTSD2USI,
	VCVTSH2SD,
	VCVTSH2SI,
	VCVTSH2SS,
	VCVTSH2USI,
	VCVTSI2SD,
	VCVTSI2SH,
	VCVTSI2SS,
	VCVTSS2SD,
	VCVTSS2SH,
	VCVTSS2SI,
	VCVTSS2USI,
	VCVTTPD2DQ,
	VCVTTPD2QQ,
	VCVTTPD2UDQ,
	VCVTTPD2UQQ,
	VCVTTPH2DQ,
	VCVTTPH2QQ,
	VCVTTPH2UDQ,
	VCVTTPH2UQQ,
	VCVTTPH2UW,
	VCVTTPH2W,
	VCVTTPS2DQ,
	VCVTTPS2QQ,
	VCVTTPS2UDQ,
	VCVTTPS2UQQ,
	VCVTTSD2SI,
	VCVTTSD2USI,
	VCVTTSH2SI,
	VCVTTSH2USI,
	VCVTTSS2SI,
	VCVTTSS2USI,
	VCVTUDQ2PD,
	VCVTUDQ2PH,
	VCVTUDQ2PS,
	VCVTUQQ2PD,
	VCVTUQQ2PH,
	VCVTUQQ2PS,
	VCVTUSI2SD,
	VCVTUSI2SH,
	VCVTUSI2SS,
	VCVTUW2PH,
	VCVTW2PH,
	VDBPSADBW,
	VDIVPD,
	VDIVPH,
	VDIVPS,
	VDIVSD,
	VDIVSH,
	VDIVSS,
	VDPBF16PS,
	VDPPD,
	VDPPS,
	VERR,
	VERW,
	VEXP223PS,
	VEXP2PD,
	VEXP2PS,
	VEXPANDPD,
	VEXPANDPS,
	VEXTRACTF128,
	VEXTRACTF32X4,
	VEXTRACTF32X8,
	VEXTRACTF64X2,
	VEXTRACTF64X4,
	VEXTRACTI128,
	VEXTRACTI32X4,
	VEXTRACTI32X8,
	VEXTRACTI64X2,
	VEXTRACTI64X4,
	VEXTRACTPS,
	VFCMADDCPH,
	VFCMADDCSH,
	VFCMULCPH,
	VFCMULCSH,
	VFIXUPIMMPD,
	VFIXUPIMMPS,
	VFIXUPIMMSD,
	VFIXUPIMMSS,
	VFIXUPNANPD,
	VFIXUPNANPS,
	VFMADD132PD,
	VFMADD132PH,
	VFMADD132PS,
	VFMADD132SD,
	VFMADD132SH,
	VFMADD132SS,
	VFMADD213PD,
	VFMADD213PH,
	VFMADD213PS,
	VFMADD213SD,
	VFMADD213SH,
	VFMADD213SS,
	VFMADD231PD,
	VFMADD231PH,
	VFMADD231PS,
	VFMADD231SD,
	VFMADD231SH,
	VFMADD231SS,
	VFMADD233PS,
	VFMADDCPH,
	VFMADDCSH,
	VFMADDPD,
	VFMADDPS,
	VFMADDSD,
	VFMADDSS,
	VFMADDSUB132PD,
	VFMADDSUB132PH,
	VFMADDSUB132PS,
	VFMADDSUB213PD,
	VFMADDSUB213PH,
	VFMADDSUB213PS,
	VFMADDSUB231PD,
	VFMADDSUB231PH,
	VFMADDSUB231PS,
	VFMADDSUBPD,
	VFMADDSUBPS,
	VFMSUB132PD,
	VFMSUB132PH,
	VFMSUB132PS,
	VFMSUB132SD,
	VFMSUB132SH,
	VFMSUB132SS,
	VFMSUB213PD,
	VFMSUB213PH,
	VFMSUB213PS,
	VFMSUB213SD,
	VFMSUB213SH,
	VFMSUB213SS,
	VFMSUB231PD,
	VFMSUB231PH,
	VFMSUB231PS,
	VFMSUB231SD,
	VFMSUB231SH,
	VFMSUB231SS,
	VFMSUBADD132PD,
	VFMSUBADD132PH,
	VFMSUBADD132PS,
	VFMSUBADD213PD,
	VFMSUBADD213PH,
	VFMSUBADD213PS,
	VFMSUBADD231PD,
	VFMSUBADD231PH,
	VFMSUBADD231PS,
	VFMSUBADDPD,
	VFMSUBADDPS,
	VFMSUBPD,
	VFMSUBPS,
	VFMSUBSD,
	VFMSUBSS,
	VFMULCPH,
	VFMULCSH,
	VFNMADD132PD,
	VFNMADD132PH,
	VFNMADD132PS,
	VFNMADD132SD,
	VFNMADD132SH,
	VFNMADD132SS,
	VFNMADD213PD,
	VFNMADD213PH,
	VFNMADD213PS,
	VFNMADD213SD,
	VFNMADD213SH,
	VFNMADD213SS,
	VFNMADD231PD,
	VFNMADD231PH,
	VFNMADD231PS,
	VFNMADD231SD,
	VFNMADD231SH,
	VFNMADD231SS,
	VFNMADDPD,
	VFNMADDPS,
	VFNMADDSD,
	VFNMADDSS,
	VFNMSUB132PD,
	VFNMSUB132PH,
	VFNMSUB132PS,
	VFNMSUB132SD,
	VFNMSUB132SH,
	VFNMSUB132SS,
	VFNMSUB213PD,
	VFNMSUB213PH,
	VFNMSUB213PS,
	VFNMSUB213SD,
	VFNMSUB213SH,
	VFNMSUB213SS,
	VFNMSUB231PD,
	VFNMSUB231PH,
	VFNMSUB231PS,
	VFNMSUB231SD,
	VFNMSUB231SH,
	VFNMSUB231SS,
	VFNMSUBPD,
	VFNMSUBPS,
	VFNMSUBSD,
	VFNMSUBSS,
	VFPCLASSPD,
	VFPCLASSPH,
	VFPCLASSPS,
	VFPCLASSSD,
	VFPCLASSSH,
	VFPCLASSSS,
	VFRCZPD,
	VFRCZPS,
	VFRCZSD,
	VFRCZSS,
	VGATHERDPD,
	VGATHERDPS,
	VGATHERPF0DPD,
	VGATHERPF0DPS,
	VGATHERPF0HINTDPD,
	VGATHERPF0HINTDPS,
	VGATHERPF0QPD,
	VGATHERPF0QPS,
	VGATHERPF1DPD,
	VGATHERPF1DPS,
	VGATHERPF1QPD,
	VGATHERPF1QPS,
	VGATHERQPD,
	VGATHERQPS,
	VGETEXPPD,
	VGETEXPPH,
	VGETEXPPS,
	VGETEXPSD,
	VGETEXPSH,
	VGETEXPSS,
	VGETMANTPD,
	VGETMANTPH,
	VGETMANTPS,
	VGETMANTSD,
	VGETMANTSH,
	VGETMANTSS,
	VGF2P8AFFINEINVQB,
	VGF2P8AFFINEQB,
	VGF2P8MULB,
	VGMAXABSPS,
	VGMAXPD,
	VGMAXPS,
	VGMINPD,
	VGMINPS,
	VHADDPD,
	VHADDPS,
	VHSUBPD,
	VHSUBPS,
	VINSERTF128,
	VINSERTF32X4,
	VINSERTF32X8,
	VINSERTF64X2,
	VINSERTF64X4,
	VINSERTI128,
	VINSERTI32X4,
	VINSERTI32X8,
	VINSERTI64X2,
	VINSERTI64X4,
	VINSERTPS,
	VLDDQU,
	VLDMXCSR,
	VLOADUNPACKHD,
	VLOADUNPACKHPD,
	VLOADUNPACKHPS,
	VLOADUNPACKHQ,
	VLOADUNPACKLD,
	VLOADUNPACKLPD,
	VLOADUNPACKLPS,
	VLOADUNPACKLQ,
	VLOG2PS,
	VMASKMOVDQU,
	VMASKMOVPD,
	VMASKMOVPS,
	VMAXPD,
	VMAXPH,
	VMAXPS,
	VMAXSD,
	VMAXSH,
	VMAXSS,
	VMCALL,
	VMCLEAR,
	VMFUNC,
	VMINPD,
	VMINPH,
	VMINPS,
	VMINSD,
	VMINSH,
	VMINSS,
	VMLAUNCH,
	VMLOAD,
	VMMCALL,
	VMOVAPD,
	VMOVAPS,
	VMOVD,
	VMOVDDUP,
	VMOVDQA,
	VMOVDQA32,
	VMOVDQA64,
	VMOVDQU,
	VMOVDQU16,
	VMOVDQU32,
	VMOVDQU64,
	VMOVDQU8,
	VMOVHLPS,
	VMOVHPD,
	VMOVHPS,
	VMOVLHPS,
	VMOVLPD,
	VMOVLPS,
	VMOVMSKPD,
	VMOVMSKPS,
	VMOVNRAPD,
	VMOVNRAPS,
	VMOVNRNGOAPD,
	VMOVNRNGOAPS,
	VMOVNTDQ,
	VMOVNTDQA,
	VMOVNTPD,
	VMOVNTPS,
	VMOVQ,
	VMOVSD,
	VMOVSH,
	VMOVSHDUP,
	VMOVSLDUP,
	VMOVSS,
	VMOVUPD,
	VMOVUPS,
	VMOVW,
	VMPSADBW,
	VMPTRLD,
	VMPTRST,
	VMREAD,
	VMRESUME,
	VMRUN,
	VMSAVE,
	VMULPD,
	VMULPH,
	VMULPS,
	VMULSD,
	VMULSH,
	VMULSS,
	VMWRITE,
	VMXOFF,
	VMXON,
	VORPD,
	VORPS,
	VP2INTERSECTD,
	VP2INTERSECTQ,
	VP4DPWSSD,
	VP4DPWSSDS,
	VPABSB,
	VPABSD,
	VPABSQ,
	VPABSW,
	VPACKSSDW,
	VPACKSSWB,
	VPACKSTOREHD,
	VPACKSTOREHPD,
	VPACKSTOREHPS,
	VPACKSTOREHQ,
	VPACKSTORELD,
	VPACKSTORELPD,
	VPACKSTORELPS,
	VPACKSTORELQ,
	VPACKUSDW,
	VPACKUSWB,
	VPADCD,
	VPADDB,
	VPADDD,
	VPADDQ,
	VPADDSB,
	VPADDSETCD,
	VPADDSETSD,
	VPADDSW,
	VPADDUSB,
	VPADDUSW,
	VPADDW,
	VPALIGNR,
	VPAND,
	VPANDD,
	VPANDN,
	VPANDND,
	VPANDNQ,
	VPANDQ,
	VPAVGB,
	VPAVGW,
	VPBLENDD,
	VPBLENDMB,
	VPBLENDMD,
	VPBLENDMQ,
	VPBLENDMW,
	VPBLENDVB,
	VPBLENDW,
	VPBROADCASTB,
	VPBROADCASTD,
	VPBROADCASTMB2Q,
	VPBROADCASTMW2D,
	VPBROADCASTQ,
	VPBROADCASTW,
	VPCLMULQDQ,
	VPCMOV,
	VPCMPB,
	VPCMPD,
	VPCMPEQB,
	VPCMPEQD,
	VPCMPEQQ,
	VPCMPEQW,
	VPCMPESTRI,
	VPCMPESTRM,
	VPCMPGTB,
	VPCMPGTD,
	VPCMPGTQ,
	VPCMPGTW,
	VPCMPISTRI,
	VPCMPISTRM,
	VPCMPLTD,
	VPCMPQ,
	VPCMPUB,
	VPCMPUD,
	VPCMPUQ,
	VPCMPUW,
	VPCMPW,
	VPCOMB,
	VPCOMD,
	VPCOMPRESSB,
	VPCOMPRESSD,
	VPCOMPRESSQ,
	VPCOMPRESSW,
	VPCOMQ,
	VPCOMUB,
	VPCOMUD,
	VPCOMUQ,
	VPCOMUW,
	VPCOMW,
	VPCONFLICTD,
	VPCONFLICTQ,
	VPDPBSSD,
	VPDPBSSDS,
	VPDPBSUD,
	VPDPBSUDS,
	VPDPBUSD,
	VPDPBUSDS,
	VPDPBUUD,
	VPDPBUUDS,
	VPDPWSSD,
	VPDPWSSDS,
	VPERM2F128,
	VPERM2I128,
	VPERMB,
	VPERMD,
	VPERMF32X4,
	VPERMI2B,
	VPERMI2D,
	VPERMI2PD,
	VPERMI2PS,
	VPERMI2Q,
	VPERMI2W,
	VPERMIL2PD,
	VPERMIL2PS,
	VPERMILPD,
	VPERMILPS,
	VPERMPD,
	VPERMPS,
	VPERMQ,
	VPERMT2B,
	VPERMT2D,
	VPERMT2PD,
	VPERMT2PS,
	VPERMT2Q,
	VPERMT2W,
	VPERMW,
	VPEXPANDB,
	VPEXPANDD,
	VPEXPANDQ,
	VPEXPANDW,
	VPEXTRB,
	VPEXTRD,
	VPEXTRQ,
	VPEXTRW,
	VPGATHERDD,
	VPGATHERDQ,
	VPGATHERQD,
	VPGATHERQQ,
	VPHADDBD,
	VPHADDBQ,
	VPHADDBW,
	VPHADDD,
	VPHADDDQ,
	VPHADDSW,
	VPHADDUBD,
	VPHADDUBQ,
	VPHADDUBW,
	VPHADDUDQ,
	VPHADDUWD,
	VPHADDUWQ,
	VPHADDW,
	VPHADDWD,
	VPHADDWQ,
	VPHMINPOSUW,
	VPHSUBBW,
	VPHSUBD,
	VPHSUBDQ,
	VPHSUBSW,
	VPHSUBW,
	VPHSUBWD,
	VPINSRB,
	VPINSRD,
	VPINSRQ,
	VPINSRW,
	VPLZCNTD,
	VPLZCNTQ,
	VPMACSDD,
	VPMACSDQH,
	VPMACSDQL,
	VPMACSSDD,
	VPMACSSDQH,
	VPMACSSDQL,
	VPMACSSWD,
	VPMACSSWW,
	VPMACSWD,
	VPMACSWW,
	VPMADCSSWD,
	VPMADCSWD,
	VPMADD231D,
	VPMADD233D,
	VPMADD52HUQ,
	VPMADD52LUQ,
	VPMADDUBSW,
	VPMADDWD,
	VPMASKMOVD,
	VPMASKMOVQ,
	VPMAXSB,
	VPMAXSD,
	VPMAXSQ,
	VPMAXSW,
	VPMAXUB,
	VPMAXUD,
	VPMAXUQ,
	VPMAXUW,
	VPMINSB,
	VPMINSD,
	VPMINSQ,
	VPMINSW,
	VPMINUB,
	VPMINUD,
	VPMINUQ,
	VPMINUW,
	VPMOVB2M,
	VPMOVD2M,
	VPMOVDB,
	VPMOVDW,
	VPMOVM2B,
	VPMOVM2D,
	VPMOVM2Q,
	VPMOVM2W,
	VPMOVMSKB,
	VPMOVQ2M,
	VPMOVQB,
	VPMOVQD,
	VPMOVQW,
	VPMOVSDB,
	VPMOVSDW,
	VPMOVSQB,
	VPMOVSQD,
	VPMOVSQW,
	VPMOVSWB,
	VPMOVSXBD,
	VPMOVSXBQ,
	VPMOVSXBW,
	VPMOVSXDQ,
	VPMOVSXWD,
	VPMOVSXWQ,
	VPMOVUSDB,
	VPMOVUSDW,
	VPMOVUSQB,
	VPMOVUSQD,
	VPMOVUSQW,
	VPMOVUSWB,
	VPMOVW2M,
	VPMOVWB,
	VPMOVZXBD,
	VPMOVZXBQ,
	VPMOVZXBW,
	VPMOVZXDQ,
	VPMOVZXWD,
	VPMOVZXWQ,
	VPMULDQ,
	VPMULHD,
	VPMULHRSW,
	VPMULHUD,
	VPMULHUW,
	VPMULHW,
	VPMULLD,
	VPMULLQ,
	VPMULLW,
	VPMULTISHIFTQB,
	VPMULUDQ,
	VPOPCNTB,
	VPOPCNTD,
	VPOPCNTQ,
	VPOPCNTW,
	VPOR,
	VPORD,
	VPORQ,
	VPPERM,
	VPREFETCH0,
	VPREFETCH1,
	VPREFETCH2,
	VPREFETCHE0,
	VPREFETCHE1,
	VPREFETCHE2,
	VPREFETCHENTA,
	VPREFETCHNTA,
	VPROLD,
	VPROLQ,
	VPROLVD,
	VPROLVQ,
	VPRORD,
	VPRORQ,
	VPRORVD,
	VPRORVQ,
	VPROTB,
	VPROTD,
	VPROTQ,
	VPROTW,
	VPSADBW,
	VPSBBD,
	VPSBBRD,
	VPSCATTERDD,
	VPSCATTERDQ,
	VPSCATTERQD,
	VPSCATTERQQ,
	VPSHAB,
	VPSHAD,
	VPSHAQ,
	VPSHAW,
	VPSHLB,
	VPSHLD,
	VPSHLDD,
	VPSHLDQ,
	VPSHLDVD,
	VPSHLDVQ,
	VPSHLDVW,
	VPSHLDW,
	VPSHLQ,
	VPSHLW,
	VPSHRDD,
	VPSHRDQ,
	VPSHRDVD,
	VPSHRDVQ,
	VPSHRDVW,
	VPSHRDW,
	VPSHUFB,
	VPSHUFBITQMB,
	VPSHUFD,
	VPSHUFHW,
	VPSHUFLW,
	VPSIGNB,
	VPSIGND,
	VPSIGNW,
	VPSLLD,
	VPSLLDQ,
	VPSLLQ,
	VPSLLVD,
	VPSLLVQ,
	VPSLLVW,
	VPSLLW,
	VPSRAD,
	VPSRAQ,
	VPSRAVD,
	VPSRAVQ,
	VPSRAVW,
	VPSRAW,
	VPSRLD,
	VPSRLDQ,
	VPSRLQ,
	VPSRLVD,
	VPSRLVQ,
	VPSRLVW,
	VPSRLW,
	VPSUBB,
	VPSUBD,
	VPSUBQ,
	VPSUBRD,
	VPSUBRSETBD,
	VPSUBSB,
	VPSUBSETBD,
	VPSUBSW,
	VPSUBUSB,
	VPSUBUSW,
	VPSUBW,
	VPTERNLOGD,
	VPTERNLOGQ,
	VPTEST,
	VPTESTMB,
	VPTESTMD,
	VPTESTMQ,
	VPTESTMW,
	VPTESTNMB,
	VPTESTNMD,
	VPTESTNMQ,
	VPTESTNMW,
	VPUNPCKHBW,
	VPUNPCKHDQ,
	VPUNPCKHQDQ,
	VPUNPCKHWD,
	VPUNPCKLBW,
	VPUNPCKLDQ,
	VPUNPCKLQDQ,
	VPUNPCKLWD,
	VPXOR,
	VPXORD,
	VPXORQ,
	VRANGEPD,
	VRANGEPS,
	VRANGESD,
	VRANGESS,
	VRCP14PD,
	VRCP14PS,
	VRCP14SD,
	VRCP14SS,
	VRCP23PS,
	VRCP28PD,
	VRCP28PS,
	VRCP28SD,
	VRCP28SS,
	VRCPPH,
	VRCPPS,
	VRCPSH,
	VRCPSS,
	VREDUCEPD,
	VREDUCEPH,
	VREDUCEPS,
	VREDUCESD,
	VREDUCESH,
	VREDUCESS,
	VRNDFXPNTPD,
	VRNDFXPNTPS,
	VRNDSCALEPD,
	VRNDSCALEPH,
	VRNDSCALEPS,
	VRNDSCALESD,
	VRNDSCALESH,
	VRNDSCALESS,
	VROUNDPD,
	VROUNDPS,
	VROUNDSD,
	VROUNDSS,
	VRSQRT14PD,
	VRSQRT14PS,
	VRSQRT14SD,
	VRSQRT14SS,
	VRSQRT23PS,
	VRSQRT28PD,
	VRSQRT28PS,
	VRSQRT28SD,
	VRSQRT28SS,
	VRSQRTPH,
	VRSQRTPS,
	VRSQRTSH,
	VRSQRTSS,
	VSCALEFPD,
	VSCALEFPH,
	VSCALEFPS,
	VSCALEFSD,
	VSCALEFSH,
	VSCALEFSS,
	VSCALEPS,
	VSCATTERDPD,
	VSCATTERDPS,
	VSCATTERPF0DPD,
	VSCATTERPF0DPS,
	VSCATTERPF0HINTDPD,
	VSCATTERPF0HINTDPS,
	VSCATTERPF0QPD,
	VSCATTERPF0QPS,
	VSCATTERPF1DPD,
	VSCATTERPF1DPS,
	VSCATTERPF1QPD,
	VSCATTERPF1QPS,
	VSCATTERQPD,
	VSCATTERQPS,
	VSHUFF32X4,
	VSHUFF64X2,
	VSHUFI32X4,
	VSHUFI64X2,
	VSHUFPD,
	VSHUFPS,
	VSQRTPD,
	VSQRTPH,
	VSQRTPS,
	VSQRTSD,
	VSQRTSH,
	VSQRTSS,
	VSTMXCSR,
	VSUBPD,
	VSUBPH,
	VSUBPS,
	VSUBRPD,
	VSUBRPS,
	VSUBSD,
	VSUBSH,
	VSUBSS,
	VTESTPD,
	VTESTPS,
	VUCOMISD,
	VUCOMISH,
	VUCOMISS,
	VUNPCKHPD,
	VUNPCKHPS,
	VUNPCKLPD,
	VUNPCKLPS,
	VXORPD,
	VXORPS,
	VZEROALL,
	VZEROUPPER,
	WBINVD,
	WRFSBASE,
	WRGSBASE,
	WRMSR,
	WRMSRLIST,
	WRMSRNS,
	WRPKRU,
	WRSSD,
	WRSSQ,
	WRUSSD,
	WRUSSQ,
	XABORT,
	XADD,
	XBEGIN,
	XCHG,
	XCRYPT_CBC,
	XCRYPT_CFB,
	XCRYPT_CTR,
	XCRYPT_ECB,
	XCRYPT_OFB,
	XEND,
	XGETBV,
	XLAT,
	XOR,
	XORPD,
	XORPS,
	XRESLDTRK,
	XRSTOR,
	XRSTOR64,
	XRSTORS,
	XRSTORS64,
	XSAVE,
	XSAVE64,
	XSAVEC,
	XSAVEC64,
	XSAVEOPT,
	XSAVEOPT64,
	XSAVES,
	XSAVES64,
	XSETBV,
	XSHA1,
	XSHA256,
	XSTORE,
	XSUSLDTRK,
	XTEST,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = XTEST,
}
export enum OpcodeMap {
	MAP_DEFAULT,
	MAP_0F,
	MAP_0F38,
	MAP_0F3A,
	MAP_MAP4, // not used
	MAP_MAP5,
	MAP_MAP6,
	MAP_MAP7, // not used
	MAP_0F0F,
	MAP_XOP8,
	MAP_XOP9,
	MAP_XOPA,

	/**
	 * Maximum value of this enum.
	 */
	MAP_, // MAX_VALUE = MAP_XOPA,
}

export namespace InsnAttribute {
	/**
	 * The instruction has the `ModRM` byte.
	 */
	export const HAS_MODRM = 1n << 0n;
	/**
	 * The instruction has the `SIB` byte.
	 */
	export const HAS_SIB = 1n << 1n;
	/**
	 * The instruction has the `REX` prefix.
	 */
	export const HAS_REX = 1n << 2n;
	/**
	 * The instruction has the `XOP` prefix.
	 */
	export const HAS_XOP = 1n << 3n;
	/**
	 * The instruction has the `VEX` prefix.
	 */
	export const HAS_VEX = 1n << 4n;
	/**
	 * The instruction has the `EVEX` prefix.
	 */
	export const HAS_EVEX = 1n << 5n;
	/**
	 * The instruction has the `MVEX` prefix.
	 */
	export const HAS_MVEX = 1n << 6n;
	/**
	 * The instruction has one or more operands with position-relative offsets.
	 */
	export const IS_RELATIVE = 1n << 7n;
	/**
	 * The instruction is privileged.
	 *
	 * Privileged instructions are any instructions that require a current ring level below 3.
	 */
	export const IS_PRIVILEGED = 1n << 8n;
	/**
	 * The instruction accesses one or more CPU-flags.
	 */
	export const CPUFLAG_ACCESS = 1n << 9n;
	/**
	 * The instruction may conditionally read the general CPU state.
	 */
	export const CPU_STATE_CR = 1n << 10n;
	/**
	 * The instruction may conditionally write the general CPU state.
	 */
	export const CPU_STATE_CW = 1n << 11n;
	/**
	 * The instruction may conditionally read the FPU state (X87, MMX).
	 */
	export const FPU_STATE_CR = 1n << 12n;
	/**
	 * The instruction may conditionally write the FPU state (X87, MMX).
	 */
	export const FPU_STATE_CW = 1n << 13n;
	/**
	 * The instruction may conditionally read the XMM state (AVX, AVX2, AVX-512).
	 */
	export const XMM_STATE_CR = 1n << 14n;
	/**
	 * The instruction may conditionally write the XMM state (AVX, AVX2, AVX-512).
	 */
	export const XMM_STATE_CW = 1n << 15n;
	/**
	 * The instruction accepts the `LOCK` prefix (`0xF0`).
	 */
	export const ACCEPTS_LOCK = 1n << 16n;
	/**
	 * The instruction accepts the `REP` prefix (`0xF3`).
	 */
	export const ACCEPTS_REP = 1n << 17n;
	/**
	 * The instruction accepts the `REPE`/`REPZ` prefix (`0xF3`).
	 */
	export const ACCEPTS_REPE = 1n << 18n;
	/**
	 * The instruction accepts the `REPE`/`REPZ` prefix (`0xF3`).
	 */
	export const ACCEPTS_REPZ = ACCEPTS_REPE;
	/**
	 * The instruction accepts the `REPNE`/`REPNZ` prefix (`0xF2`).
	 */
	export const ACCEPTS_REPNE = 1n << 19n;
	/**
	 * The instruction accepts the `REPNE`/`REPNZ` prefix (`0xF2`).
	 */
	export const ACCEPTS_REPNZ = ACCEPTS_REPNE;
	/**
	 * The instruction accepts the `BND` prefix (`0xF2`).
	 */
	export const ACCEPTS_BND = 1n << 20n;
	/**
	 * The instruction accepts the `XACQUIRE` prefix (`0xF2`).
	 */
	export const ACCEPTS_XACQUIRE = 1n << 21n;
	/**
	 * The instruction accepts the `XRELEASE` prefix (`0xF3`).
	 */
	export const ACCEPTS_XRELEASE = 1n << 22n;
	/**
	 * The instruction accepts the `XACQUIRE`/`XRELEASE` prefixes (`0xF2`, `0xF3`)
	 * without the `LOCK` prefix (`0x0F`).
	 */
	export const ACCEPTS_HLE_WITHOUT_LOCK = 1n << 23n;
	/**
	 * The instruction accepts branch hints (0x2E, 0x3E).
	 */
	export const ACCEPTS_BRANCH_HINTS = 1n << 24n;
	/**
	 * The instruction accepts the `CET` `no-track` prefix (`0x3E`).
	 */
	export const ACCEPTS_NOTRACK = 1n << 25n;
	/**
	 * The instruction accepts segment prefixes (`0x2E`, `0x36`, `0x3E`, `0x26`,
	 * `0x64`, `0x65`).
	 */
	export const ACCEPTS_SEGMENT = 1n << 26n;
	/**
	 * The instruction has the `LOCK` prefix (`0xF0`).
	 */
	export const HAS_LOCK = 1n << 27n;
	/**
	 * The instruction has the `REP` prefix (`0xF3`).
	 */
	export const HAS_REP = 1n << 28n;
	/**
	 * The instruction has the `REPE`/`REPZ` prefix (`0xF3`).
	 */
	export const HAS_REPE = 1n << 29n;
	/**
	 * The instruction has the `REPE`/`REPZ` prefix (`0xF3`).
	 */
	export const HAS_REPZ = HAS_REPE;
	/**
	 * The instruction has the `REPNE`/`REPNZ` prefix (`0xF2`).
	 */
	export const HAS_REPNE = 1n << 30n;
	/**
	 * The instruction has the `REPNE`/`REPNZ` prefix (`0xF2`).
	 */
	export const HAS_REPNZ = HAS_REPNE;
	/**
	 * The instruction has the `BND` prefix (`0xF2`).
	 */
	export const HAS_BND = 1n << 31n;
	/**
	 * The instruction has the `XACQUIRE` prefix (`0xF2`).
	 */
	export const HAS_XACQUIRE = 1n << 32n;
	/**
	 * The instruction has the `XRELEASE` prefix (`0xF3`).
	 */
	export const HAS_XRELEASE = 1n << 33n;
	/**
	 * The instruction has the branch-not-taken hint (`0x2E`).
	 */
	export const HAS_BRANCH_NOT_TAKEN = 1n << 34n;
	/**
	 * The instruction has the branch-taken hint (`0x3E`).
	 */
	export const HAS_BRANCH_TAKEN = 1n << 35n;
	/**
	 * The instruction has the `CET` `no-track` prefix (`0x3E`).
	 */
	export const HAS_NOTRACK = 1n << 36n;
	/**
	 * The instruction has the `CS` segment modifier (`0x2E`).
	 */
	export const HAS_SEGMENT_CS = 1n << 37n;
	/**
	 * The instruction has the `SS` segment modifier (`0x36`).
	 */
	export const HAS_SEGMENT_SS = 1n << 38n;
	/**
	 * The instruction has the `DS` segment modifier (`0x3E`).
	 */
	export const HAS_SEGMENT_DS = 1n << 39n;
	/**
	 * The instruction has the `ES` segment modifier (`0x26`).
	 */
	export const HAS_SEGMENT_ES = 1n << 40n;
	/**
	 * The instruction has the `FS` segment modifier (`0x64`).
	 */
	export const HAS_SEGMENT_FS = 1n << 41n;
	/**
	 * The instruction has the `GS` segment modifier (`0x65`).
	 */
	export const HAS_SEGMENT_GS = 1n << 42n;
	/**
	 * The instruction has a segment modifier.
	 */
	export const HAS_SEGMENT =
		HAS_SEGMENT_CS | HAS_SEGMENT_SS | HAS_SEGMENT_DS | HAS_SEGMENT_ES | HAS_SEGMENT_FS | HAS_SEGMENT_GS;
	/**
	 * The instruction has the operand-size override prefix (`0x66`).
	 */
	export const HAS_OPERANDSIZE = 1n << 43n; // TODO: rename
	/**
	 * The instruction has the address-size override prefix (`0x67`).
	 */
	export const HAS_ADDRESSSIZE = 1n << 44n; // TODO: rename
	/**
	 * The instruction has the `EVEX.b` bit set.
	 *
	 * This attribute is mainly used by the encoder.
	 */
	export const HAS_EVEX_B = 1n << 45n; // TODO: rename
}

export enum ISASet {
	INVALID,
	ADOX_ADCX,
	AES,
	AMD,
	AMD3DNOW,
	AMD_INVLPGB,
	AMX_BF16,
	AMX_FP16,
	AMX_INT8,
	AMX_TILE,
	AVX,
	AVX2,
	AVX2GATHER,
	AVX512BW_128,
	AVX512BW_128N,
	AVX512BW_256,
	AVX512BW_512,
	AVX512BW_KOP,
	AVX512CD_128,
	AVX512CD_256,
	AVX512CD_512,
	AVX512DQ_128,
	AVX512DQ_128N,
	AVX512DQ_256,
	AVX512DQ_512,
	AVX512DQ_KOP,
	AVX512DQ_SCALAR,
	AVX512ER_512,
	AVX512ER_SCALAR,
	AVX512F_128,
	AVX512F_128N,
	AVX512F_256,
	AVX512F_512,
	AVX512F_KOP,
	AVX512F_SCALAR,
	AVX512PF_512,
	AVX512_4FMAPS_512,
	AVX512_4FMAPS_SCALAR,
	AVX512_4VNNIW_512,
	AVX512_BF16_128,
	AVX512_BF16_256,
	AVX512_BF16_512,
	AVX512_BITALG_128,
	AVX512_BITALG_256,
	AVX512_BITALG_512,
	AVX512_FP16_128,
	AVX512_FP16_128N,
	AVX512_FP16_256,
	AVX512_FP16_512,
	AVX512_FP16_SCALAR,
	AVX512_GFNI_128,
	AVX512_GFNI_256,
	AVX512_GFNI_512,
	AVX512_IFMA_128,
	AVX512_IFMA_256,
	AVX512_IFMA_512,
	AVX512_VAES_128,
	AVX512_VAES_256,
	AVX512_VAES_512,
	AVX512_VBMI2_128,
	AVX512_VBMI2_256,
	AVX512_VBMI2_512,
	AVX512_VBMI_128,
	AVX512_VBMI_256,
	AVX512_VBMI_512,
	AVX512_VNNI_128,
	AVX512_VNNI_256,
	AVX512_VNNI_512,
	AVX512_VP2INTERSECT_128,
	AVX512_VP2INTERSECT_256,
	AVX512_VP2INTERSECT_512,
	AVX512_VPCLMULQDQ_128,
	AVX512_VPCLMULQDQ_256,
	AVX512_VPCLMULQDQ_512,
	AVX512_VPOPCNTDQ_128,
	AVX512_VPOPCNTDQ_256,
	AVX512_VPOPCNTDQ_512,
	AVXAES,
	AVX_GFNI,
	AVX_IFMA,
	AVX_NE_CONVERT,
	AVX_VNNI,
	AVX_VNNI_INT8,
	BMI1,
	BMI2,
	CET,
	CLDEMOTE,
	CLFLUSHOPT,
	CLFSH,
	CLWB,
	CLZERO,
	CMOV,
	CMPXCHG16B,
	ENQCMD,
	F16C,
	FAT_NOP,
	FCMOV,
	FCOMI,
	FMA,
	FMA4,
	FXSAVE,
	FXSAVE64,
	GFNI,
	HRESET,
	I186,
	I286PROTECTED,
	I286REAL,
	I386,
	I486,
	I486REAL,
	I86,
	ICACHE_PREFETCH,
	INVPCID,
	KEYLOCKER,
	KEYLOCKER_WIDE,
	KNCE,
	KNCJKBR,
	KNCSTREAM,
	KNCV,
	KNC_MISC,
	KNC_PF_HINT,
	LAHF,
	LONGMODE,
	LWP,
	LZCNT,
	MCOMMIT,
	MONITOR,
	MONITORX,
	MOVBE,
	MOVDIR,
	MPX,
	MSRLIST,
	PADLOCK_ACE,
	PADLOCK_PHE,
	PADLOCK_PMM,
	PADLOCK_RNG,
	PAUSE,
	PCLMULQDQ,
	PCOMMIT,
	PCONFIG,
	PENTIUMMMX,
	PENTIUMREAL,
	PKU,
	POPCNT,
	PPRO,
	PREFETCHWT1,
	PREFETCH_NOP,
	PT,
	RAO_INT,
	RDPID,
	RDPMC,
	RDPRU,
	RDRAND,
	RDSEED,
	RDTSCP,
	RDWRFSGS,
	RTM,
	SERIALIZE,
	SGX,
	SGX_ENCLV,
	SHA,
	SMAP,
	SMX,
	SNP,
	SSE,
	SSE2,
	SSE2MMX,
	SSE3,
	SSE3X87,
	SSE4,
	SSE42,
	SSE4A,
	SSEMXCSR,
	SSE_PREFETCH,
	SSSE3,
	SSSE3MMX,
	SVM,
	TBM,
	TDX,
	TSX_LDTRK,
	UINTR,
	VAES,
	VMFUNC,
	VPCLMULQDQ,
	VTX,
	WAITPKG,
	WRMSRNS,
	X87,
	XOP,
	XSAVE,
	XSAVEC,
	XSAVEOPT,
	XSAVES,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = XSAVES,
}
export enum ISAExt {
	INVALID,
	ADOX_ADCX,
	AES,
	AMD3DNOW,
	AMD3DNOW_PREFETCH,
	AMD_INVLPGB,
	AMX_BF16,
	AMX_FP16,
	AMX_INT8,
	AMX_TILE,
	AVX,
	AVX2,
	AVX2GATHER,
	AVX512EVEX,
	AVX512VEX,
	AVXAES,
	AVX_IFMA,
	AVX_NE_CONVERT,
	AVX_VNNI,
	AVX_VNNI_INT8,
	BASE,
	BMI1,
	BMI2,
	CET,
	CLDEMOTE,
	CLFLUSHOPT,
	CLFSH,
	CLWB,
	CLZERO,
	ENQCMD,
	F16C,
	FMA,
	FMA4,
	GFNI,
	HRESET,
	ICACHE_PREFETCH,
	INVPCID,
	KEYLOCKER,
	KEYLOCKER_WIDE,
	KNC,
	KNCE,
	KNCV,
	LONGMODE,
	LZCNT,
	MCOMMIT,
	MMX,
	MONITOR,
	MONITORX,
	MOVBE,
	MOVDIR,
	MPX,
	MSRLIST,
	PADLOCK,
	PAUSE,
	PCLMULQDQ,
	PCOMMIT,
	PCONFIG,
	PKU,
	PREFETCHWT1,
	PT,
	RAO_INT,
	RDPID,
	RDPRU,
	RDRAND,
	RDSEED,
	RDTSCP,
	RDWRFSGS,
	RTM,
	SERIALIZE,
	SGX,
	SGX_ENCLV,
	SHA,
	SMAP,
	SMX,
	SNP,
	SSE,
	SSE2,
	SSE3,
	SSE4,
	SSE4A,
	SSSE3,
	SVM,
	TBM,
	TDX,
	TSX_LDTRK,
	UINTR,
	VAES,
	VMFUNC,
	VPCLMULQDQ,
	VTX,
	WAITPKG,
	WRMSRNS,
	X87,
	XOP,
	XSAVE,
	XSAVEC,
	XSAVEOPT,
	XSAVES,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = XSAVES,
}
export enum InsnCategory {
	INVALID,
	ADOX_ADCX,
	AES,
	AMD3DNOW,
	AMX_TILE,
	AVX,
	AVX2,
	AVX2GATHER,
	AVX512,
	AVX512_4FMAPS,
	AVX512_4VNNIW,
	AVX512_BITALG,
	AVX512_VBMI,
	AVX512_VP2INTERSECT,
	AVX_IFMA,
	BINARY,
	BITBYTE,
	BLEND,
	BMI1,
	BMI2,
	BROADCAST,
	CALL,
	CET,
	CLDEMOTE,
	CLFLUSHOPT,
	CLWB,
	CLZERO,
	CMOV,
	COMPRESS,
	COND_BR,
	CONFLICT,
	CONVERT,
	DATAXFER,
	DECIMAL,
	ENQCMD,
	EXPAND,
	FCMOV,
	FLAGOP,
	FMA4,
	FP16,
	GATHER,
	GFNI,
	HRESET,
	IFMA,
	INTERRUPT,
	IO,
	IOSTRINGOP,
	KEYLOCKER,
	KEYLOCKER_WIDE,
	KMASK,
	KNC,
	KNCMASK,
	KNCSCALAR,
	LEGACY,
	LOGICAL,
	LOGICAL_FP,
	LZCNT,
	MISC,
	MMX,
	MOVDIR,
	MPX,
	MSRLIST,
	NOP,
	PADLOCK,
	PCLMULQDQ,
	PCOMMIT,
	PCONFIG,
	PKU,
	POP,
	PREFETCH,
	PREFETCHWT1,
	PT,
	PUSH,
	RDPID,
	RDPRU,
	RDRAND,
	RDSEED,
	RDWRFSGS,
	RET,
	ROTATE,
	SCATTER,
	SEGOP,
	SEMAPHORE,
	SERIALIZE,
	SETCC,
	SGX,
	SHA,
	SHIFT,
	SMAP,
	SSE,
	STRINGOP,
	STTNI,
	SYSCALL,
	SYSRET,
	SYSTEM,
	TBM,
	TSX_LDTRK,
	UFMA,
	UINTR,
	UNCOND_BR,
	VAES,
	VBMI2,
	VEX,
	VFMA,
	VPCLMULQDQ,
	VTX,
	WAITPKG,
	WIDENOP,
	WRMSRNS,
	X87_ALU,
	XOP,
	XSAVE,
	XSAVEOPT,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = XSAVEOPT,
}
export enum FormatterStyle {
	/**
	 * Generates `AT&T`-style disassembly.
	 */
	ATT,
	/**
	 * Generates `Intel`-style disassembly.
	 */
	INTEL,
	/**
	 * Generates `MASM`-style disassembly that is directly accepted as input for
	 * the `MASM` assembler.
	 *
	 * The runtime-address is ignored in this mode.
	 */
	INTEL_MASM,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = INTEL_MASM,
}

/**
 * Enum selecting a property of the formatter.
 */
export enum FormatterProperty {
	/* ---------------------------------------------------------------------------------------- */
	/* General                                                                                  */
	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the printing of effective operand-size suffixes (`AT&T`) or operand-sizes
	 * of memory operands (`INTEL`).
	 *
	 * Pass `ZYAN_TRUE` as value to force the formatter to always print the size, or `ZYAN_FALSE`
	 * to only print it if needed.
	 */
	FORCE_SIZE,
	/**
	 * Controls the printing of segment prefixes.
	 *
	 * Pass `ZYAN_TRUE` as value to force the formatter to always print the segment register of
	 * memory-operands or `ZYAN_FALSE` to omit implicit `DS`/`SS` segments.
	 */
	FORCE_SEGMENT,
	/**
	 * Controls the printing of the scale-factor component for memory operands.
	 *
	 * Pass `ZYAN_TRUE` as value to force the formatter to always print the scale-factor component
	 * of memory operands or `ZYAN_FALSE` to omit the scale factor for values of `1`.
	 */
	FORCE_SCALE_ONE,
	/**
	 * Controls the printing of branch addresses.
	 *
	 * Pass `ZYAN_TRUE` as value to force the formatter to always print relative branch addresses
	 * or `ZYAN_FALSE` to use absolute addresses, if a runtime-address different to
	 * `ZYDIS_RUNTIME_ADDRESS_NONE` was passed.
	 */
	FORCE_RELATIVE_BRANCHES,
	/**
	 * Controls the printing of `EIP`/`RIP`-relative addresses.
	 *
	 * Pass `ZYAN_TRUE` as value to force the formatter to always print relative addresses for
	 * `EIP`/`RIP`-relative operands or `ZYAN_FALSE` to use absolute addresses, if a runtime-
	 * address different to `ZYDIS_RUNTIME_ADDRESS_NONE` was passed.
	 */
	FORCE_RELATIVE_RIPREL,
	/**
	 * Controls the printing of branch-instructions sizes.
	 *
	 * Pass `ZYAN_TRUE` as value to print the size (`short`, `near`) of branch
	 * instructions or `ZYAN_FALSE` to hide it.
	 *
	 * Note that the `far`/`l` modifier is always printed.
	 */
	PRINT_BRANCH_SIZE,

	/**
	 * Controls the printing of instruction prefixes.
	 *
	 * Pass `ZYAN_TRUE` as value to print all instruction-prefixes (even ignored or duplicate
	 * ones) or `ZYAN_FALSE` to only print prefixes that are effectively used by the instruction.
	 */
	DETAILED_PREFIXES,

	/* ---------------------------------------------------------------------------------------- */
	/* Numeric values                                                                           */
	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the base of address values.
	 */
	ADDR_BASE,
	/**
	 * Controls the signedness of relative addresses. Absolute addresses are
	 * always unsigned.
	 */
	ADDR_SIGNEDNESS,
	/**
	 * Controls the padding of absolute address values.
	 *
	 * Pass `DISABLED` to disable padding, `AUTO` to padd all
	 * addresses to the current stack width (hexadecimal only), or any other integer value for
	 * custom padding.
	 */
	ADDR_PADDING_ABSOLUTE,
	/**
	 * Controls the padding of relative address values.
	 *
	 * Pass `DISABLED` to disable padding, `AUTO` to padd all
	 * addresses to the current stack width (hexadecimal only), or any other integer value for
	 * custom padding.
	 */
	ADDR_PADDING_RELATIVE,

	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the base of displacement values.
	 */
	DISP_BASE,
	/**
	 * Controls the signedness of displacement values.
	 */
	DISP_SIGNEDNESS,
	/**
	 * Controls the padding of displacement values.
	 *
	 * Pass `DISABLED` to disable padding, or any other integer value for custom
	 * padding.
	 */
	DISP_PADDING,

	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the base of immediate values.
	 */
	IMM_BASE,
	/**
	 * Controls the signedness of immediate values.
	 *
	 * Pass `AUTO` to automatically choose the most suitable mode based on the
	 * operands `ZydisDecodedOperand.imm.is_signed` attribute.
	 */
	IMM_SIGNEDNESS,
	/**
	 * Controls the padding of immediate values.
	 *
	 * Pass `DISABLED` to disable padding, `AUTO` to padd all
	 * immediates to the operand-width (hexadecimal only), or any other integer value for custom
	 * padding.
	 */
	IMM_PADDING,

	/* ---------------------------------------------------------------------------------------- */
	/* Text formatting                                                                          */
	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the letter-case for prefixes.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase or `ZYAN_FALSE` to format in lowercase.
	 */
	UPPERCASE_PREFIXES,
	/**
	 * Controls the letter-case for the mnemonic.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase or `ZYAN_FALSE` to format in lowercase.
	 */
	UPPERCASE_MNEMONIC,
	/**
	 * Controls the letter-case for registers.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase or `ZYAN_FALSE` to format in lowercase.
	 */
	UPPERCASE_REGISTERS,
	/**
	 * Controls the letter-case for typecasts.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase or `ZYAN_FALSE` to format in lowercase.
	 */
	UPPERCASE_TYPECASTS,
	/**
	 * Controls the letter-case for decorators.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase or `ZYAN_FALSE` to format in lowercase.
	 */
	UPPERCASE_DECORATORS,

	/* ---------------------------------------------------------------------------------------- */
	/* Number formatting                                                                        */
	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the prefix for decimal values.
	 *
	 * Pass a pointer to a null-terminated C-style string with a maximum length of 10 characters
	 * to set a custom prefix, or `ZYAN_NULL` to disable it.
	 *
	 * The string is deep-copied into an internal buffer.
	 */
	DEC_PREFIX,
	/**
	 * Controls the suffix for decimal values.
	 *
	 * Pass a pointer to a null-terminated C-style string with a maximum length of 10 characters
	 * to set a custom suffix, or `ZYAN_NULL` to disable it.
	 *
	 * The string is deep-copied into an internal buffer.
	 */
	DEC_SUFFIX,

	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Controls the letter-case of hexadecimal values.
	 *
	 * Pass `ZYAN_TRUE` as value to format in uppercase and `ZYAN_FALSE` to format in lowercase.
	 *
	 * The default value is `ZYAN_TRUE`.
	 */
	HEX_UPPERCASE,
	/**
	 * Controls whether to prepend hexadecimal values with a leading zero if the first character
	 * is non-numeric.
	 *
	 * Pass `ZYAN_TRUE` to prepend a leading zero if the first character is non-numeric or
	 * `ZYAN_FALSE` to disable this functionality.
	 *
	 * The default value is `ZYAN_FALSE`.
	 */
	HEX_FORCE_LEADING_NUMBER,
	/**
	 * Controls the prefix for hexadecimal values.
	 *
	 * Pass a pointer to a null-terminated C-style string with a maximum length of 10 characters
	 * to set a custom prefix, or `ZYAN_NULL` to disable it.
	 *
	 * The string is deep-copied into an internal buffer.
	 */
	HEX_PREFIX,
	/**
	 * Controls the suffix for hexadecimal values.
	 *
	 * Pass a pointer to a null-terminated C-style string with a maximum length of 10 characters
	 * to set a custom suffix, or `ZYAN_NULL` to disable it.
	 *
	 * The string is deep-copied into an internal buffer.
	 */
	HEX_SUFFIX,

	/* ---------------------------------------------------------------------------------------- */

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = HEX_SUFFIX,
}
/* ---------------------------------------------------------------------------------------------- */

/**
 * Enum defining different mantissae to be used during formatting.
 */
export enum NumericBase {
	/**
	 * Decimal system.
	 */
	DEC,
	/**
	 * Hexadecimal system.
	 */
	HEX,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = HEX,
}
/* ---------------------------------------------------------------------------------------------- */

/**
 * Enum defining the signeness of integers to be used during formatting.
 */
export enum Signedness {
	/**
	 * Automatically choose the most suitable mode based on the operands
	 * ZydisDecodedOperand.imm.is_signed` attribute.
	 */
	AUTO,
	/**
	 * Force signed values.
	 */
	SIGNED,
	/**
	 * Force unsigned values.
	 */
	UNSIGNED,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = UNSIGNED,
}
/* ---------------------------------------------------------------------------------------------- */

/**
 * Enum definining magic values that receive special treatment when used as padding properties
 * of the formatter.
 */
export enum Padding {
	/**
	 * Disables padding.
	 */
	DISABLED = 0,
	/**
	 * Padds the value to the current stack-width for addresses, or to the
	 * operand-width for immediate values (hexadecimal only).
	 */
	AUTO = -1,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = AUTO,
}

/**
 * Enum of all decorator types.
 */
export enum Decorator {
	INVALID,
	/**
	 * The embedded-mask decorator.
	 */
	MASK,
	/**
	 * The broadcast decorator.
	 */
	BC,
	/**
	 * The rounding-control decorator.
	 */
	RC,
	/**
	 * The suppress-all-exceptions decorator.
	 */
	SAE,
	/**
	 * The register-swizzle decorator.
	 */
	SWIZZLE,
	/**
	 * The conversion decorator.
	 */
	CONVERSION,
	/**
	 * The eviction-hint decorator.
	 */
	EH,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = EH,
}

export enum Register {
	NONE,

	// General purpose registers  8-bit
	AL,
	CL,
	DL,
	BL,
	AH,
	CH,
	DH,
	BH,
	SPL,
	BPL,
	SIL,
	DIL,
	R8B,
	R9B,
	R10B,
	R11B,
	R12B,
	R13B,
	R14B,
	R15B,

	// General purpose registers 16-bit
	AX,
	CX,
	DX,
	BX,
	SP,
	BP,
	SI,
	DI,
	R8W,
	R9W,
	R10W,
	R11W,
	R12W,
	R13W,
	R14W,
	R15W,

	// General purpose registers 32-bit
	EAX,
	ECX,
	EDX,
	EBX,
	ESP,
	EBP,
	ESI,
	EDI,
	R8D,
	R9D,
	R10D,
	R11D,
	R12D,
	R13D,
	R14D,
	R15D,

	// General purpose registers 64-bit
	RAX,
	RCX,
	RDX,
	RBX,
	RSP,
	RBP,
	RSI,
	RDI,
	R8,
	R9,
	R10,
	R11,
	R12,
	R13,
	R14,
	R15,

	// Floating point legacy registers
	ST0,
	ST1,
	ST2,
	ST3,
	ST4,
	ST5,
	ST6,
	ST7,
	X87CONTROL,
	X87STATUS,
	X87TAG,

	// Floating point multimedia registers
	MM0,
	MM1,
	MM2,
	MM3,
	MM4,
	MM5,
	MM6,
	MM7,

	// Floating point vector registers 128-bit
	XMM0,
	XMM1,
	XMM2,
	XMM3,
	XMM4,
	XMM5,
	XMM6,
	XMM7,
	XMM8,
	XMM9,
	XMM10,
	XMM11,
	XMM12,
	XMM13,
	XMM14,
	XMM15,
	XMM16,
	XMM17,
	XMM18,
	XMM19,
	XMM20,
	XMM21,
	XMM22,
	XMM23,
	XMM24,
	XMM25,
	XMM26,
	XMM27,
	XMM28,
	XMM29,
	XMM30,
	XMM31,

	// Floating point vector registers 256-bit
	YMM0,
	YMM1,
	YMM2,
	YMM3,
	YMM4,
	YMM5,
	YMM6,
	YMM7,
	YMM8,
	YMM9,
	YMM10,
	YMM11,
	YMM12,
	YMM13,
	YMM14,
	YMM15,
	YMM16,
	YMM17,
	YMM18,
	YMM19,
	YMM20,
	YMM21,
	YMM22,
	YMM23,
	YMM24,
	YMM25,
	YMM26,
	YMM27,
	YMM28,
	YMM29,
	YMM30,
	YMM31,

	// Floating point vector registers 512-bit
	ZMM0,
	ZMM1,
	ZMM2,
	ZMM3,
	ZMM4,
	ZMM5,
	ZMM6,
	ZMM7,
	ZMM8,
	ZMM9,
	ZMM10,
	ZMM11,
	ZMM12,
	ZMM13,
	ZMM14,
	ZMM15,
	ZMM16,
	ZMM17,
	ZMM18,
	ZMM19,
	ZMM20,
	ZMM21,
	ZMM22,
	ZMM23,
	ZMM24,
	ZMM25,
	ZMM26,
	ZMM27,
	ZMM28,
	ZMM29,
	ZMM30,
	ZMM31,

	// Matrix registers
	TMM0,
	TMM1,
	TMM2,
	TMM3,
	TMM4,
	TMM5,
	TMM6,
	TMM7,

	// Flags registers
	FLAGS,
	EFLAGS,
	RFLAGS,

	// Instruction-pointer registers
	IP,
	EIP,
	RIP,

	// Segment registers
	ES,
	CS,
	SS,
	DS,
	FS,
	GS,

	// Table registers
	GDTR,
	LDTR,
	IDTR,
	TR,

	// Test registers
	TR0,
	TR1,
	TR2,
	TR3,
	TR4,
	TR5,
	TR6,
	TR7,

	// Control registers
	CR0,
	CR1,
	CR2,
	CR3,
	CR4,
	CR5,
	CR6,
	CR7,
	CR8,
	CR9,
	CR10,
	CR11,
	CR12,
	CR13,
	CR14,
	CR15,

	// Debug registers
	DR0,
	DR1,
	DR2,
	DR3,
	DR4,
	DR5,
	DR6,
	DR7,
	DR8,
	DR9,
	DR10,
	DR11,
	DR12,
	DR13,
	DR14,
	DR15,

	// Mask registers
	K0,
	K1,
	K2,
	K3,
	K4,
	K5,
	K6,
	K7,

	// Bound registers
	BND0,
	BND1,
	BND2,
	BND3,
	BNDCFG,
	BNDSTATUS,

	// Uncategorized
	MXCSR,
	PKRU,
	XCR0,
	UIF,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = UIF,
}

export enum RegisterKind {
	INVALID,
	GPR,
	X87,
	MMX,
	VR,
	TMM,
	SEGMENT,
	TEST,
	CONTROL,
	DEBUG,
	MASK,
	BOUND,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = BOUND,
}

/* ---------------------------------------------------------------------------------------------- */
/* Register classes                                                                               */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisRegisterClass` enum.
 *
 * Please note that this enum does not contain a matching entry for all values of the
 * `ZydisRegister` enum, but only for those registers where it makes sense to logically group them
 * for decoding/encoding purposes.
 *
 * These are mainly the registers that can be identified by an id within their corresponding
 * register-class. The `IP` and `FLAGS` values are exceptions to this rule.
 */
export enum RegisterClass {
	INVALID,
	/**
	 * 8-bit general-purpose registers.
	 */
	GPR8,
	/**
	 * 16-bit general-purpose registers.
	 */
	GPR16,
	/**
	 * 32-bit general-purpose registers.
	 */
	GPR32,
	/**
	 * 64-bit general-purpose registers.
	 */
	GPR64,
	/**
	 * Floating point legacy registers.
	 */
	X87,
	/**
	 * Floating point multimedia registers.
	 */
	MMX,
	/**
	 * 128-bit vector registers.
	 */
	XMM,
	/**
	 * 256-bit vector registers.
	 */
	YMM,
	/**
	 * 512-bit vector registers.
	 */
	ZMM,
	/**
	 * Matrix registers.
	 */
	TMM,
	/*
	 * Flags registers.
	 */
	FLAGS,
	/**
	 * Instruction-pointer registers.
	 */
	IP,
	/**
	 * Segment registers.
	 */
	SEGMENT,
	/**
	 * Table registers.
	 */
	TABLE,
	/**
	 * Test registers.
	 */
	TEST,
	/**
	 * Control registers.
	 */
	CONTROL,
	/**
	 * Debug registers.
	 */
	DEBUG,
	/**
	 * Mask registers.
	 */
	MASK,
	/**
	 * Bound registers.
	 */
	BOUND,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = BOUND,
}

/* ---------------------------------------------------------------------------------------------- */
/* Element type                                                                                   */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisElementType` enum.
 */
export enum ElementType {
	INVALID,
	/**
	 * A struct type.
	 */
	STRUCT,
	/**
	 * Unsigned integer value.
	 */
	UINT,
	/**
	 * Signed integer value.
	 */
	INT,
	/**
	 * 16-bit floating point value (`half`).
	 */
	FLOAT16,
	/**
	 * 32-bit floating point value (`single`).
	 */
	FLOAT32,
	/**
	 * 64-bit floating point value (`double`).
	 */
	FLOAT64,
	/**
	 * 80-bit floating point value (`extended`).
	 */
	FLOAT80,
	/**
	 * 16-bit brain floating point value.
	 */
	BFLOAT16,
	/**
	 * Binary coded decimal value.
	 */
	LONGBCD,
	/**
	 * A condition code (e.g. used by `CMPPD`, `VCMPPD`, ...).
	 */
	CC,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = CC,
}

/* ---------------------------------------------------------------------------------------------- */
/* Operand type                                                                                   */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisOperandType` enum.
 */
export enum OperandType {
	/**
	 * The operand is not used.
	 */
	UNUSED,
	/**
	 * The operand is a register operand.
	 */
	REGISTER,
	/**
	 * The operand is a memory operand.
	 */
	MEMORY,
	/**
	 * The operand is a pointer operand with a segment:offset lvalue.
	 */
	POINTER,
	/**
	 * The operand is an immediate operand.
	 */
	IMMEDIATE,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = IMMEDIATE,
}

/* ---------------------------------------------------------------------------------------------- */
/* Operand encoding                                                                               */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisOperandEncoding` enum.
 */
export enum OperandEncoding {
	NONE,
	MODRM_REG,
	MODRM_RM,
	OPCODE,
	NDSNDD,
	IS4,
	MASK,
	DISP8,
	DISP16,
	DISP32,
	DISP64,
	DISP16_32_64,
	DISP32_32_64,
	DISP16_32_32,
	UIMM8,
	UIMM16,
	UIMM32,
	UIMM64,
	UIMM16_32_64,
	UIMM32_32_64,
	UIMM16_32_32,
	SIMM8,
	SIMM16,
	SIMM32,
	SIMM64,
	SIMM16_32_64,
	SIMM32_32_64,
	SIMM16_32_32,
	JIMM8,
	JIMM16,
	JIMM32,
	JIMM64,
	JIMM16_32_64,
	JIMM32_32_64,
	JIMM16_32_32,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = JIMM16_32_32,
}

/* ---------------------------------------------------------------------------------------------- */
/* Operand visibility                                                                             */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisOperandVisibility` enum.
 */
export enum OperandVisibility {
	INVALID,
	/**
	 * The operand is explicitly encoded in the instruction.
	 */
	EXPLICIT,
	/**
	 * The operand is part of the opcode, but listed as an operand.
	 */
	IMPLICIT,
	/**
	 * The operand is part of the opcode, and not typically listed as an operand.
	 */
	HIDDEN,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = HIDDEN,
}

/* ---------------------------------------------------------------------------------------------- */
/* Operand action                                                                                 */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisOperandAction` enum.
 */
export enum OperandAction {
	/* ------------------------------------------------------------------------------------------ */
	/* Elemental actions                                                                          */
	/* ------------------------------------------------------------------------------------------ */

	/**
	 * The operand is read by the instruction.
	 */
	READ = 0x01,
	/**
	 * The operand is written by the instruction (must write).
	 */
	WRITE = 0x02,
	/**
	 * The operand is conditionally read by the instruction.
	 */
	CONDREAD = 0x04,
	/**
	 * The operand is conditionally written by the instruction (may write).
	 */
	CONDWRITE = 0x08,

	/* ------------------------------------------------------------------------------------------ */
	/* Combined actions                                                                           */
	/* ------------------------------------------------------------------------------------------ */

	/**
	 * The operand is read (must read) and written by the instruction (must write).
	 */
	READWRITE = READ | WRITE,
	/**
	 * The operand is conditionally read (may read) and conditionally written by
	 * the instruction (may write).
	 */
	CONDREAD_CONDWRITE = CONDREAD | CONDWRITE,
	/**
	 * The operand is read (must read) and conditionally written by the
	 * instruction (may write).
	 */
	READ_CONDWRITE = READ | CONDWRITE,
	/**
	 * The operand is written (must write) and conditionally read by the
	 * instruction (may read).
	 */
	CONDREAD_WRITE = CONDREAD | WRITE,

	/**
	 * Mask combining all reading access flags.
	 */
	MASK_READ = READ | CONDREAD,
	/**
	 * Mask combining all writing access flags.
	 */
	MASK_WRITE = WRITE | CONDWRITE,
}

/* ---------------------------------------------------------------------------------------------- */
/* Instruction encoding                                                                           */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisInstructionEncoding` enum.
 */
export enum InstructionEncoding {
	/**
	 * The instruction uses the legacy encoding.
	 */
	LEGACY,
	/**
	 * The instruction uses the AMD 3DNow-encoding.
	 */
	"3DNOW",
	/**
	 * The instruction uses the AMD XOP-encoding.
	 */
	XOP,
	/**
	 * The instruction uses the VEX-encoding.
	 */
	VEX,
	/**
	 * The instruction uses the EVEX-encoding.
	 */
	EVEX,
	/**
	 * The instruction uses the MVEX-encoding.
	 */
	MVEX,

	/**
	 * Maximum value of this enum.
	 */
	// MAX_VALUE = MVEX,
}

export enum MemoryOperandType {
	INVALID,
	/**
	 * Normal memory operand.
	 */
	MEM,
	/**
	 * The memory operand is only used for address-generation. No real memory-access is
	 * caused.
	 */
	AGEN,
	/**
	 * A memory operand using `SIB` addressing form, where the index register is not used
	 * in address calculation and scale is ignored. No real memory-access is caused.
	 */
	MIB,
	/**
	 * A vector `SIB` memory addressing operand (`VSIB`).
	 */
	VSIB,
}

/**
 * Defines possible physical instruction encodings as bit flags, so multiple acceptable encodings
 * can be specified simultaneously.
 */
export enum EncodableEncoding {
	DEFAULT = 0x00000000,
	LEGACY = 0x00000001,
	"3DNOW" = 0x00000002,
	XOP = 0x00000004,
	VEX = 0x00000008,
	EVEX = 0x00000010,
	MVEX = 0x00000020,
}

/**
 * Defines encodable physical/effective sizes of relative immediate operands. See
 * `ZydisEncoderRequest.branch_width` for more details.
 */
export enum BranchWidth {
	WIDTH_NONE,
	WIDTH_8,
	WIDTH_16,
	WIDTH_32,
	WIDTH_64,
}

/**
 * Defines possible values for address size hints. See `ZydisEncoderRequest` for more information
 * about address size hints.
 */
export enum AddressSizeHint {
	HINT_NONE,
	HINT_16,
	HINT_32,
	HINT_64,
}

/**
 * Defines possible values for operand size hints. See `ZydisEncoderRequest` for more information
 * about operand size hints.
 */
export enum OperandSizeHint {
	HINT_NONE,
	HINT_8,
	HINT_16,
	HINT_32,
	HINT_64,
}

/* ---------------------------------------------------------------------------------------------- */
/* Branch types                                                                                   */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisBranchType` enum.
 */
export enum BranchType {
	/**
	 * The instruction is not a branch instruction.
	 */
	NONE,
	/**
	 * The instruction is a short (8-bit) branch instruction.
	 */
	SHORT,
	/**
	 * The instruction is a near (16-bit or 32-bit) branch instruction.
	 */
	NEAR,
	/**
	 * The instruction is a far (inter-segment) branch instruction.
	 */
	FAR,
}

/* ---------------------------------------------------------------------------------------------- */
/* SSE/AVX exception-class                                                                        */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisExceptionClass` enum.
 */
export enum ExceptionClass {
	NONE,
	// TODO: FP Exceptions
	SSE1,
	SSE2,
	SSE3,
	SSE4,
	SSE5,
	SSE7,
	AVX1,
	AVX2,
	AVX3,
	AVX4,
	AVX5,
	AVX6,
	AVX7,
	AVX8,
	AVX11,
	AVX12,
	E1,
	E1NF,
	E2,
	E2NF,
	E3,
	E3NF,
	E4,
	E4NF,
	E5,
	E5NF,
	E6,
	E6NF,
	E7NM,
	E7NM128,
	E9NF,
	E10,
	E10NF,
	E11,
	E11NF,
	E12,
	E12NP,
	K20,
	K21,
	AMXE1,
	AMXE2,
	AMXE3,
	AMXE4,
	AMXE5,
	AMXE6,
}

/* ---------------------------------------------------------------------------------------------- */
/* AVX mask mode                                                                                  */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisMaskMode` enum.
 */
export enum MaskMode {
	INVALID,
	/**
	 * Masking is disabled for the current instruction (`K0` register is used).
	 */
	DISABLED,
	/**
	 * The embedded mask register is used as a merge-mask.
	 */
	MERGING,
	/**
	 * The embedded mask register is used as a zero-mask.
	 */
	ZEROING,
	/**
	 * The embedded mask register is used as a control-mask (element selector).
	 */
	CONTROL,
	/**
	 * The embedded mask register is used as a zeroing control-mask (element selector).
	 */
	CONTROL_ZEROING,
}

/* ---------------------------------------------------------------------------------------------- */
/* AVX broadcast-mode                                                                             */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisBroadcastMode` enum.
 */
export enum BroadcastMode {
	MODE_INVALID,
	MODE_1_TO_2,
	MODE_1_TO_4,
	MODE_1_TO_8,
	MODE_1_TO_16,
	MODE_1_TO_32,
	MODE_1_TO_64,
	MODE_2_TO_4,
	MODE_2_TO_8,
	MODE_2_TO_16,
	MODE_4_TO_8,
	MODE_4_TO_16,
	MODE_8_TO_16,
}

/* ---------------------------------------------------------------------------------------------- */
/* AVX rounding-mode                                                                              */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisRoundingMode` enum.
 */
export enum RoundingMode {
	INVALID,
	/**
	 * Round to nearest.
	 */
	RN,
	/**
	 * Round down.
	 */
	RD,
	/**
	 * Round up.
	 */
	RU,
	/**
	 * Round towards zero.
	 */
	RZ,
}

/* ---------------------------------------------------------------------------------------------- */
/* KNC swizzle-mode                                                                               */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisSwizzleMode` enum.
 */
export enum SwizzleMode {
	INVALID,
	DCBA,
	CDAB,
	BADC,
	DACB,
	AAAA,
	BBBB,
	CCCC,
	DDDD,
}

/* ---------------------------------------------------------------------------------------------- */
/* KNC conversion-mode                                                                            */
/* ---------------------------------------------------------------------------------------------- */

/**
 * Defines the `ZydisConversionMode` enum.
 */
export enum ConversionMode {
	INVALID,
	FLOAT16,
	SINT8,
	UINT8,
	SINT16,
	UINT16,
}

export enum Feature {
	DECODER,
	ENCODER,
	FORMATTER,
	AVX512,
	KNC,
	SEGMENT,
}

export enum CPUFlag {
	CF = 1 << 0,
	/**
	 * Parity flag.
	 */
	PF = 1 << 2,
	/**
	 * Adjust flag.
	 */
	AF = 1 << 4,
	/**
	 * Zero flag.
	 */
	ZF = 1 << 6,
	/**
	 * Sign flag.
	 */
	SF = 1 << 7,
	/**
	 * Trap flag.
	 */
	TF = 1 << 8,
	/**
	 * Interrupt enable flag.
	 */
	IF = 1 << 9,
	/**
	 * Direction flag.
	 */
	DF = 1 << 10,
	/**
	 * Overflow flag.
	 */
	OF = 1 << 11,
	/**
	 * I/O privilege level flag.
	 */
	IOPL = 1 << 12,
	/**
	 * Nested task flag.
	 */
	NT = 1 << 14,
	/**
	 * Resume flag.
	 */
	RF = 1 << 16,
	/**
	 * Virtual 8086 mode flag.
	 */
	VM = 1 << 17,
	/**
	 * Alignment check.
	 */
	AC = 1 << 18,
	/**
	 * Virtual interrupt flag.
	 */
	VIF = 1 << 19,
	/**
	 * Virtual interrupt pending.
	 */
	VIP = 1 << 20,
	/**
	 * Able to use CPUID instruction.
	 */
	ID = 1 << 21,
}

export enum FPUFlag {
	/**
	 * FPU condition-code flag 0.
	 */
	C0 = 1 << 0,
	/**
	 * FPU condition-code flag 1.
	 */
	C1 = 1 << 1,
	/**
	 * FPU condition-code flag 2.
	 */
	C2 = 1 << 2,
	/**
	 * FPU condition-code flag 3.
	 */
	C3 = 1 << 3,
}

export const MAX_INSN_LENGTH = 15;
export const MAX_OPERANDS = 10;
export const MAX_VISIBLE_OPERANDS = 5;
