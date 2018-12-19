# Cryptography



###  Part B

1. Diffusion and confusion with example:

   Confusion: an encryption operation where the relationship between **key** and **ciphertext** is obscured. (substitution )

   Diffusion: an encryption  opeartion where the influnce of one **plaintext** symbol is spread over many ciphertext, the goal is hiding statical properties of the plaintext.  (bit permutation)

   111001   >> block cipher >> 101010

   101001   >> block cipher >> 000100

2. F- function steps

   ![](./images/f_function.png)

   1. Expansion E : increase diffusion.

   2. XOR Round Key: Bitwise XOR of the round key and the output of the expansion function E.

   3. S-box substitution: 

      * 8 substitution tables.
      * 6 bits input, 4 bits output: the 6 bit inputs: first and last one is to identify the row and the middle 4 bits for column.
      * Non-linear and resistant to differential cryptanalysis.
      * Crucial element for DES security.

   4. Permutaion P: 

      * bitwise permutation.
      * intriduces diffusion.
      * outpu of one S-box effect several S-Boxes in nest round.

      Diffusion by E, S-box and P guarantess that after round 5 every bit is a function of each key bit and each plaintext bit.
