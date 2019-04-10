# Import Package
from googletrans import Translator

# Create Translator object
translator = Translator()

while True:
    print('\n--------------')

    print('Select one of these (Press 0 to exit)')
    print('1. Language Conversion')
    print('2. Destination Language')

    option = int(input('Option:'))

    if option == 1:

        a = input('Input the string to convert:')

        b = input('Input the source language:')
        c = input('The destination languagc:')
        # Translate source string into destination language

        translated = translator.translate(a, src=b, dest=c)
        # Print source string
        print('string:' + translated.origin)
        # Print source language
        print('Source Language:' + translated.src)
        # Print translated string
        print('Translated string:' + translated.text)
        # Print destination laguage
        print('Destination Language:' + translated.dest)
        # Print translated string pronumciation
        print('Destination pronunciation:', translated.pronunciation)
    elif option == 2:
        a = input('Enter source string:')
        # Translate source string in request destination laguage
        detected = translator.detect(a)
        # Print detected language
        print('Detected Languagc:', detected.lang, 'with confidence: ', detected.confidence)
    elif option == 0:
        break
    else:
        print('Invalid option')
    translatedlist = translator.translate(
        [""], dest='ja')
    for translated in translatedlist:
        print(translated.origin, "-->", translated.text)