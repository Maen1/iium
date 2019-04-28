import pyttsx3
engine = pyttsx3.init()
voices = engine.getProperty('voices')
# a = ['I', 'B', 'C', 'D']
engine.setProperty('voice', 'com.apple.speech.synthesis.voice.samantha') 
engine.say('The quick brown fox jumped over the lazy dog.')
engine.runAndWait()