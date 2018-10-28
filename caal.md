# Computer Architecture and Assembly Language 

> If Boing had kept up with IBM we could fly from KL to NY in 10 minutes by 10 RM 

## Computer performance

* Response time(elapse time, latency)
  * How long deos it take ?
    * for  job to run
    * to excute (start to finish) job
    * waiting database query
* Throughput 
  * How many jobs can machine run at once ?
  * What is the average execution rate ?
  * How much work is getting done ?

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

### To imporve performance	

* reduce the number of cycles.
* reduce the clock cycle time (increase the clock rate).

> changing the cycle time often changes the number of cycles required for various instructions
> because it means changing the hardware design.

> MIPS (millions of instructions per second)
>
> CPI (cycles per instruction)

CPI  = CPU Clock Cycles / Instruction Count

### Performance equation 2

​	CPU execution time for a program = Instuction count for a program x average (CPI) x clock cycle time

​	$ \frac{P_A}{P_B}= \frac{EX_B}{EX_A} $	; EX : excution time 

$CPU \text{ Clock Cycles} = \sum_{i=1}^{n} CPI_i * C_i$ ; Ci number of instruction

---

## MIPS

> MIPS: A measurement of program excution speed based on the number of million instuctions.
>
> $ MIPS = \frac{\text{Instruction cont}}{\text{Excution time x } 10^6}$