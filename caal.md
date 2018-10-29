Computer Architecture and Assembly Language 

> If Boing had kept up with IBM we could fly from KL to NY in 10 minutes by 10 RM 

## Computer performance

* Response time(elapse time, latency)
  * How long deos it take How long it takes to do a task.
* Throughput 
  * Total work done per unit time 

## Execution time

* Elapsed time:
  * Counts every thing ( disk and memory accesses, waiting for I/O, running other programs ...)
  * elapse time = CPU time + wait time (I/O and the others..)
* CPU time:
  * Doesn't count waiting for I/O and or time spent running other programs.
  * Can be divided into user CPU time and system CPU time (OS calls).
  * CPU time = user CPU time + system CPU time

* User CPU time:
  * time spent excuting the lines of code that are run in our program.

## Performance Comparesion

* Performance = 1/ Execution time
* $Px / P_y = n $ => x faster n times than y

---

## Clock Cycles

> Machine cycle is used instead of reporting excution time in seconds.
>
> $\frac{seconds}{program} = \frac{cycles}{program} * \frac{seconds}{cycles}$

* cycle time = time between ticks = seconds per cycle
* clock rate (frequency) = cycles per second ( 1 Hz = 1 cycle/sec, 1 MHz = $10^6$ cycles/sec)
* cycle time = 1/ clock rate 

### Performance equation 1

​	CPU execution time for a program = CPU clock time  x clock cycle time 

or   CPU execution time for a program = CPU clock time  / clock cycle rate 

### To imporve performance	

* reduce the number of cycles.
* reduce the clock cycle time (increase the clock rate).

> changing the cycle time often changes the number of cycles required for various instructions
> because it means changing the hardware design.

> MIPS (millions of instructions per second)
>
> CPI (cycles per instruction)

CPI  = CPU Clock Cycles / Instruction Count

CPU Clock Cycles = CPI * I

### Performance equation 2

​	CPU execution time  = Instuction count  x average (CPI) x clock cycle time

​	$ \frac{P_A}{P_B}= \frac{EX_B}{EX_A} $	; EX : excution time 

$CPU \text{ Clock Cycles} = \sum_{i=1}^{n} CPI_i * C_i$ ; Ci number of instruction

---

## MIPS

> MIPS: A measurement of program excution speed based on the number of million instuctions.
>
> $ MIPS = \frac{\text{Instruction cont}}{\text{Excution time x } 10^6} = \frac{\text{clock rate}}{\text{CPI x} 10^6}$
>
>  

## Power Trends:

> Power = Capacitive load x $Voltage^2$ x Frequency 

* Power Wall
  * We can't reduce voltage further.
  * We can't remove more heat

## Pitfall

$ T_{improved} = \frac{T_{affected}}{improved factor} + T_{unaffected}$

----

---

# Arithmatic for Computer

## Potetial Number System

$(N)_r = d_{k-1} * r^{k-1} +  d_{k-2} * r^{k-2} + d_{0} * r^{0}$

$(11011)_2 = 1×2^4 + 1×2^3 + 0×2^2 + 1×2^1 + 1 = 27$

## Binary Numbers

*  Bit numbering:
  * Least significant bit (LSB) is rightmost (bit 0).
  * Most significant bit (MSB) is leftmost (bit 7 in an 8-bit
    number)

## Interger Storage size

| Storage Type | Usigned Range     | Powers of 2           |
| ------------ | ----------------- | --------------------- |
| Byte         | 0 - 255           | $2^8 -1$ (max number) |
| Word         | 0 - 4,294,967,295 | $2^{32} -1$           |



### Binary Addition

* Start with the least significant bit (rightmost bit).
* Add each pair of bits.
* Include the carry in the addition, if present

| 0    | 1						 							 								0 | 1						 							 								1 | 1						 							 								1 | 1						 							 								0 | 1    | 1    | 0    |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- | ---- | ---- |
| 0    | 0                                                            | 0                                                            | 1                                                            | 1                                                            | 1    | 0    | 1    |
| 0    | 1                                                            | 0                                                            | 1                                                            | 0                                                            | 0    | 1    | 1    |



### Hexadecimal Addition

* Start with the least significant hexadecimal digits.

* Let Sum = summation of two hex digits

* If Sum is greater than or equal to 16 => Sum = Sum – 16,  and the carry = 1

  11 1 

  1C37286A

  9395E84B 

  AFCD10B5 



## Signed Integer

* 4 bits 
  * 1001 = -1
  * 0001 = 1
* 10110100 = -76 = -128 + 32 + 16 + 4

## 

| Storage Type | signed Range                      | Powers of 2              |
| ------------ | --------------------------------- | ------------------------ |
| Byte         | -127 to +127                      | - $2^7$ to $2^7 -1$      |
| Word         | –2,147,483,648  t0 +2,147,483,647 | -$2^{31}$ to $2^{31} -1$ |



## Forming the second complement

| starting value                           | `00100100 = +36 ` |
| ---------------------------------------- | ----------------- |
| step1: reverse the bits (1's complement) | 11011011          |
| step 2: add 1 to the value from step 1   | +1                |
| sum = 2's complement representation      | `11011100 = -36 ` |

> Another way to obtain the 2's complement:  😻
>
> Start at the least significant 1
>  Leave all the 0s to its right unchanged Complement all the bits to its left 



### Binary Subtraction

>  When subtracting A – B, convert B to its 2's complement, then add it to A 🤪 

* Final carry is ignored, because:
  * Negative number is sign-extended with 1's.
  * You can imagine infinite 1's to the left of a negative number
  * Adding the carry to the extended 1's produces extended
    zeros

### Detecting Overflow

* No overflow when adding a positive and a negative number.

* No overflow when subtracting numbers with the same sign

  | Operation | Operand A | Operand B | Result Indicating Overflow |
  | --------- | --------- | --------- | -------------------------- |
  | A+ B      | ≥0        | ≥0        | <0                         |
  | A+ B      | <0        | <0        | ≥0                         |
  | A–B       | ≥0        | <0        | <0                         |
  | A–B       | <0        | ≥0        | ≥0                         |



### Floating Point Representation

> the  representation order of floating is : SEF

* Single Precision: 1-bit sign  + 8-bit Exponent + 23-bit Fraction
* Double Precision: 1-bit sign  + 11-bit Exponent + 52-bit Fraction

$N = (-1)^s * val(F) * 2^{val(E)}$

* S: Sign bit.
* E: Exponent Field
* F: Fraction Field

### Zero, Infinity, NAN

* Zero: 
  * Exponent field E = 0 and fraction F = 0.
  * +0 and –0 are possible according to sign bit S.
* Infinity:
  * Infinity is a special value represented with maximum E and F = 0.
    * For single precision with 8-bit exponent: maximum E = 255.
    * For double precision with 11-bit exponent: maximum E = 2047.
  * Infinity can result from overflow or division by zero.
  * +∞ and –∞ are possible according to sign bit S.
* NAN( Not a Number)
  * Result from exceptional situations, such as 0/0 or sqrt(negative).
  *  NaN is a special value represented with maximum E and F ≠ 0.
  *  Operation on a NaN results is NaN: Op(X, NaN) = NaN.

## Floating point addition

> exponent should be equal 🧐

To make exponents equal Shift the significand of the lesser exponent right by the different between them.

### Guard, Round, Sticky bit

> BBGRSSS
>
> Addition produces a carry bit, result is NOT normalized
>
> Normalize Result (shift right and increment exponent)

*  Guard bit: guards against loss of a fraction bit
* Round bit: appears just after the normalized result, after the last fraction bit(23) fro single precesion and (52)for double.
* Sticky bit: appears after the round bit (OR of all additional bits) 

## Rounding

> Round to Nearest Even: default rounding mode

#### RS cases

* RS = 00 =>  nah 
* RS = 01 => Truncate result by discarding RS.
* RS = 11 => Increment (Add one to last  fraction bit)
* RS = 10 => Tie Case (either truncate or increment result)
  * last  fraction bit(0): truncate result to keep fraction even.
  * last  fraction bit(1): increment result to make fraction even



### Decimal FP Multiplication 

$ 6 * 10^3 * 4 * 10^2  = $

* Exponent of product: 3 + 2 = 5
* Multiply the cofficients: 6 x 4 = 24
* Normalize the result: $ 24 * 10^5 =2.4 * 10^6 $

### Binary FB Multiplication

1.1 x $2^2$ x 1.1 x $2^1$

* Exponent of product:  2+1 = 3
* Multiply the cofficients: 1.1 x 1.1 = 10.01
* Normalize the result: 10.01 x $2^3$ =1.001 x $2^4$

### FB Division

> Multiply the dividend by the inverse
> of the divisor

## Leaf Procedure

```c
int leaf_example (int g, h, i, j)
{ int f;
 f = (g + h) - (i + j);
 return f;
} 
```

```assembly
leaf_example:
	# Save $s0 on stack
	addi $sp, $sp, -4 
	sw $s0, 0($sp) 
	
	# Procedure body
	add $t0, $a0, $a1
	add $t1, $a2, $a3
 	sub $s0, $t0, $t1
 	
 	# Result
 	add $v0, $s0, $zero
 	
 	# Restore $s0
 	lw $s0, 0($sp) 
 	addi $sp, $sp, 4
 	
 	# Return 
 	jr $ra
 	
```



## Non leaf Procedure

```c
int fact (int n)
{
 if (n < 1) return f;
 else return n * fact(n - 1);
} 
```

```assembly
fact: 
	addi $sp, $sp, -8 # adjust stack for 2 items
 	sw $ra, 4($sp) # save return address
 	sw $a0, 0($sp) # save argument 
 	
 	slti $t0, $a0, 1 # test for n < 1
	beq $t0, $zero, L1 
	
	addi $v0, $zero, 1 # if so, result is 1
 	addi $sp, $sp, 8 # pop 2 items from stack
	jr $ra # and return 
	
	L1: addi $a0, $a0, -1 # else decrement n
 	jal fact # recursive call 
 	
 	lw $a0, 0($sp) # restore original n
 	lw $ra, 4($sp) # and return address
 	addi $sp, $sp, 8 # pop 2 items from stack 
 	
 	mul $v0, $a0, $v0 # multiply to get result 
 	 
 	jr $ra # and return 
```



## String copy

```c
void strcpy (char x[], char y[])
{ int i;
 i = 0;
 	while ((x[i]=y[i])!='\0')
 		i += 1;
} 
```

```assembly
strcpy: 
    addi $sp, $sp, -4 # adjust stack for 1 item
    sw $s0, 0($sp) # save $s0 

	add $s0, $zero, $zero # i = 0

L1: add $t1, $s0, $a1 # addr of y[i] in $t1
 	lbu $t2, 0($t1) # $t2 = y[i] 
 	
 	add $t3, $s0, $a0 # addr of x[i] in $t3
	sb $t2, 0($t3) # x[i] = y[i] 
	
	beq $t2, $zero, L2 # exit loop if y[i] == 0 
	
	addi $s0, $s0, 1 # i = i + 1
 	j L1 # next iteration of loop 
 	
L2: lw $s0, 0($sp) # restore saved $s0
 	addi $sp, $sp, 4 # pop 1 item from stack 
 	
 	jr $ra 
```



## Synchronization in MIPS 

```assembly
 
 add $t0,$zero,$s4 ;copy exchange value
 ll $t1,0($s1) ;load linked
 sc $t0,0($s1) ;store conditional
 beq $t0,$zero,try ;branch store fails
 add $s4,$zero,$t1 ;put load value in $s4
```



---

---

# Computer Language

> MIPS: Microcomputer without Interlocked Pipeline Stage
>
> Design goal: maximize performance, minimze cost and reduce design time.

*  Emulator: hardware of software or both the duplicates (emulate) the functions of computer system to another one.
* MARS: MIPS Assembler and Runtime Simulator.

## MIPS Arithmetic

> operand must be in registers - only 32 registers provided(which require 5 bits to select one register)

| Name    | Reg No. | Usage                                        |
| ------- | ------- | -------------------------------------------- |
| $zero   | 0       | the constant of 0                            |
| $v0 -v1 | 2-3     | values for results an dexpression evaluation |
| $a0-a3  | 4-7     | arguments                                    |
| $t0-t7  | 8-15    | temporaries                                  |
| $s0-s7  | 16-23   | saved                                        |
| $t8-t9  | 24-25   | more temporaries                             |
| $gp     | 28      | global pointer                               |
| $sp     | 29      | stack pointer                                |
| $fp     | 30      | frame pointer                                |
| $ra     | 31      | return address                               |
| $k0-k1  | 26-27   | reserved for the operating system            |

### Design Principle

> Smaller is faster

* With more data use memory.
* Memory viewed as large single-dimension array with access by address.
* MIPS use word (32 bits)
* $2^{32} $ bytes with byte address form 0 to $2^{32}-1$
* $2^{30} $ words with byte address form 0, 4, 8, ... , $2^{32} -4$.

## Load and Store Instruction

> words msut be first moved from memory to registers using loads before they can operand on;
>
> then result can be stopred back to momory.

```assembly
C code:
	A = h + A[8];
////
MIPS code:
	load: 		lw $t0, 32($s3)
	arithmetic: add $t0, $s2, $t0
	sotre:      sw s$t0, 32($s3)
```



## Byte Order

* byte 0 at the leftmost(most significant) to byte 3 at the rightmost(least significant), called big-endian.
* byte 3 at the leftmost(most significant) to byte 0 at the rightmost(least significant), called little-endian.

## Instruction Format

* Register (R-Type)
  * Register-to-register instructions.
  * Op: opeartion code specifies the format of the instruction.
* Immediate (J-Type)
  * 16-bits immediate constant is part in the instruction.
* Jump(J-Type)
  * Used by jump instructions.



## Instruction Categories

* Integer Arithmetic
  * Arithmetic, logical, and shift instructions.
* Data Transfer
  * LOAD and STORE instructions that access memory
  * Data Movement and conversions
* Jump and Brach
  * Flow-control instructions that alter the sequential sequence
* Floating Point Arithmetic
  * Instructions that operate on floating-point registers.
* Miscellaneous
  * Instructions that transfer control to/from exception handlers.
  * Memory management instructions.

## R-Type Instruction



| OP        | RS                                      | Rt                                      | Rd                                              | shmt         | f                                   |
| --------- | --------------------------------------- | --------------------------------------- | ----------------------------------------------- | ------------ | ----------------------------------- |
| 6-bits    | 5                                       | 5                                       | 5                                               | 5            | 6                                   |
| operation | rigester file address   of first source | rigester file address  of second source | rigester file address  of result 's destination | shift amount | function code augmenting the opcode |

> addu & subu same operation as add&sub but overflow is ignored

add `$t0, $t1, $t2`

0000 0001 0010 1010 0100 0000 0010 0000 =0x012A4020

## Logical Bitwise Instruction

` and , or , xor , nor`

## Shift Operations

* `sll/srl`: shift left/right logical by a xonstant amount(shmt)

* ` sra` shift right arithmetic by a constant amount: the sign-bit rather than 0  is shifted from the left 
* `sllv, srl,srav` : v is for the shift amount

## Binary multiplication

* `sll` shift-left instruction can perform mulitplication.

  `sll $t0, $s1, 2 ;  $t0 = $s1 * 4` shifted twice

ex:

```assembly
#Multiply $1 by 26 (2+8+16)
sll $t0, $s1, 1 
sll $t1, $s1, 3 
addu $s2, $t0, $t1 
sll $t0, $s1, 4 
addu $s2, $s2, $t0
//operations
$t0 = $s1 * 2
$t1 = $s1 * 8 
$s2 = $s1 * 10 
$t0 = $s1 * 16 
$s2 = $s1 * 26
```



## I-Type

`addi ,andi ....`

using constant 

`addi $t0, $s1, 8`

* `lui` (load upper immediate)if we want to load 32-bit constant into register.
  * `lui (Rt, constant)`
  * copies 16-bit constant ot left 16 bits of rt
  * clear right 16 bitsof rt to 0
    * `lui $s1,0xAC51 `
    * `ori $s1, $s1, 0x65D9`



## Load and Store Instruction

```assembly
# load word instruction (word = 4 bytes)
lw Rt, imm^16(Rs)  # Rt <- Memory[Rs + imm^16]

# store word instruction
sw Rt, imm^16(Rs)  # Rt -> Memory[Rs + imm^16]
```



###Load and Store Byte and owrd 

```assembly
Byte
lb, lbu (unsigned byte),sb
Halfword
lh, lhu, sh
```



## J-Type Instruction

> J-Type format is used for uncoditional jump instruction.
>
> 26-bit immediate value is stored in instruction to specifies address of target instruction

* PC(program counter): upper 4 most significant bits(unchanged) and last 2 least significant of immediate instruction.



## Conditional Branch Instruction

```assembly
beq Rs, Rt, label # branch to label if (Rs == Rt)
bne Rs, Rt, label# branch to label if (Rs != Rt)

## Compare to zero
bltz Rs, label # barnch to label if (Rs < 0)
bgtz Rs, label # barnch to label if (Rs > 0)
blez Rs, label # barnch to label if (Rs <= 0)
bgez Rs, label # barnch to label if (Rs >= 0)
```



## Set on Less Than Instruction

 ```assembly
# Less than
slt rd, rs, rt # if (rs < rt) rd =1 else rd =0
sltu rd ,rs, rt # unsigned < 
slti rt, rs, im^16 # if(rs < im^16) rt =1 esle rt = 0
sltiu rt, rs, im^16 # unsigned <
## Ex 
# $s0 =1 , $s1 = -1
slt $t0,$s0,$s1 # results in $t0 = 0
sltu $t0,$s0,$s1 # results in $t0 = 1


 ```

### Extra Branch Instruction

```assembly

blt, bltu # branch if less than 
ble, bleu # branch if less or equal 
bgt, bgtu # branch if greater than 
bge, bgeu # branch if greater or equal
```



## Procedure

* Allows the programmer to focus on just one task at a time 

* Allows code to be reused.
* Procedure Call and Return 
  * Put parameters in a place where procedure can access(`$a0, $a3`x).
  * Transfer control to the procedure and save return address, jump and link instruction jal( Return address saved in $ra).
  * Perform the desired task.
  * Put results in a place where the calling procedure can access: Two value registers to return result `$v0, $v`
  * Return to calling procedure: jr $ra (jump to return address).



## Instruction for Procedure

* JAL (jump and link): used as the call instruction

  * save return address $ra = PC + 4 and jump to procedure.
  * Register `$ra = 31` is used by JAL the return address.

* JR(Jump Register): used to return from a procedure

  * Jump to instruction whose address is in register Rs (PC = Rs).

* JALR (Jump and link Register)

  * Save return address in Rd = PC+4 
  * Jump to procedure whose address is in register Rs ( PC = Rs)
  * Can be used to call methods ( address known only at run time)

  ```assembly
  main:
  	addi $a1, $zero , 50
  	addi $a2, $zero, 100
  	jal addNumbers
  	
  	##
  	li $v0, 1
  	addi $a0, $v1, 0
  	syscall
  	
  	# Tell the system that the program is done 
  	li $v0, 10
  	syscall
  addNumbers:
  	add $v1, $a1, $a2
  	jr $ra
  	
  ```
