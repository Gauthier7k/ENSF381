import requests
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt

def ex3(soup):
    h1 = soup.find_all("h1")
    h2 = soup.find_all("h2")
    h3 = soup.find_all("h3")
    h4 = soup.find_all("h4")
    h5 = soup.find_all("h5")
    h6 = soup.find_all("h6")
    headings = h1 + h2 + h3 + h4 + h5 + h6
    links = soup.find_all("a")
    paragraphs = soup.find_all("p")

    headingsCount = 0
    linksCount = 0
    paragraphsCount = 0
    for h in headings:
        headingsCount = headingsCount + 1
    for a in links:
        linksCount = linksCount + 1
    for p in paragraphs:
        paragraphsCount = paragraphsCount + 1

    print(f'Number of headings: {headingsCount}')
    print(f'Number of links: {linksCount}')
    print(f'Number of paragraphs: {paragraphsCount}')
    return headingsCount, linksCount, paragraphsCount

def ex4(soup):
    Strings= (soup).split(" ")
    var = input("enterKeyword: ")
    print("Occurances of ("+var+"):"+str(Strings.count(var)))

def ex5(soup):
    wordlist = {}
    Strings= (soup).split(" ")
    for word in Strings:
        word=word.lower()
        try:
            if ord(word[0])>=97 and ord(word[0])<=122 and wordlist[word]==None:
                wordlist[word]=1
            else:
                wordlist[word]+=1
        except:
            print("Not word: "+word)
    print(wordlist)
    #for word in wordlist:
        #print(wordlist[word],word)

def ex6(soup):
    longest_p = None
    largestCount = 0
    
    for p in soup.find_all("p"):
        original = p.get_text()
        words = original.split(" ")

        if (words == None) or (len(words) < 5):
            continue
        
        if len(words) > largestCount:
            largestCount = len(words)
            longest_p = original
            
    print(f'The number of words in the paragraph is: {largestCount}')
    print("The content of the longest paragraph is:")
    print(longest_p)

def ex7(headings, links, paragraphs):
    labels = ['Headings', 'Links', 'Paragraphs']
    values = [headings, links, paragraphs]

    plt.bar(labels, values)
    plt.title('Group #33')
    plt.ylabel('Count')
    plt.show()

def main():

    url = "https://en.wikipedia.org/wiki/University_of_Calgary"

    try:
        response = requests.get(url)
        response.raise_for_status() # Ensures the request was successful
        soup = BeautifulSoup(response.text, 'html.parser')
        print(f"Successfully fetched content from {url}")
    except Exception as e:
        print(f"Error fetching content: {e}")

    print(soup.prettify())

    headings, links, paragrpahs = ex3(soup)

    #ex4(soup.get_text())

    ex5(soup.get_text())

    ex6(soup)

    #ex7(headings, links, paragrpahs)

if __name__ == "__main__":
    main()