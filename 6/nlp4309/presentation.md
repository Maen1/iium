## 4. Evaluation

Google keyboard mechanism to facilitate entry of emoji

* list of recently used emojy 

* last used page by category.

  

### 4.1 Challenges when testing emoji keyboards

* the number of emojis is 845  (lv 1 emo)  
* testing the most common ones, can bias the results.
* Longitudial study:
  *  chatting behaviour: only small number of emoji are being typed 
  * emojys being typed  are dependent with user mode.
* Solution:
  * Game foramt that allows for control of the task, while still engaging users.
* Chosing data approach:
  * 10 k tweets contain emoji present on google keyboard (822) emoji.
  * keep only emoji and store how often they occured
    * 502 different emoji
  * log transform the emoji frequency to boot the likelihood for rare appearing emoji.