# procedo-cli
CLI for scrapping data from webpages



## Scrap in a snap

This is just a simple demo of ProcedoCLI. I will update the documentation soon. For now, let's have a simple example where we are extracting all the links from web page,

```bash
procedo -g data "https://html-agility-pack.net"
procedo -s node list "//a"
procedo -g attr "href"

https://zzzprojects.com/
https://html-agility-pack.net/
https://entityframework-plus.net/
https://entityframework-effort.net/
https://entityframework-dynamicfilters.net/
https://github.com/zzzprojects/GraphDiff
https://csharp-extension.com/
https://nmemory.net/
https://nugetmusthaves.com/
http://findandreplace.io/
https://dotnetfiddle.net/
http://sqlfiddle.com/
https://entityframework.net/
.
.
.
.
```



Let me explain this,

**Line 1 :**  Get [-g] Data from Url.

**Line 2 :**  Select [-s] nodes (if single then remove 'list' from command) by following [XPATH](https://www.guru99.com/xpath-selenium.html) from the data.

**Line 2 :**  Get [-g] attribute [attr] value from the selected node(s).



That's it :smile: 