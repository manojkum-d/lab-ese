<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            
                <title>Jokes</title>
                <style>
                    nav {
                        background-color: #000000;
                        color:white;
                        height:50px ;
                        padding-top: 20px;
                        width: 100%;
                        text-align:left;
                    }
                    
                    nav ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        justify-content: start;
                    }
                    
                    nav li {
                        margin: 0 15px;
                    }
                    
                    nav a {
                        text-decoration: none;
                        color: #fff;
                        font-weight: bold;
                        transition: color 0.3s ease;
                    }
                    
                    nav a:hover {
                        color: #ff0000;
                    }
                    #logo{
                        padding-top: 0px;
                        margin-top: 0px;
                        color: gray;
                        margin-right: 20px;
                    }
                    table {
                        width: 80%;
                        margin: 0 auto;
                        border-collapse: collapse;
                        background-color: #fff;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    th, td {
                        padding: 10px;
                        text-align: left;
                    }

                   
                </style>
            </head>
            <body>
                <nav>
                    <ul>
                        <h2 id="logo">Light Hearted Laughs</h2>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="feedback.html">Feedback Form</a></li>
                        <li><a href="jokes.html">Jokes fetched using xml</a></li>
            <li><a href="jsonhtml.html">Jokes fetched using Json file</a></li>
                    </ul>
                </nav>
                <h1>Jokes</h1>
                <table border="1">
                    <tr>
                        <th>Category</th>
                        <th>Joke</th>
                    </tr>
                    <xsl:for-each select="jokes/joke">
                        <tr>
                            <td><xsl:value-of select="category"/></td>
                            <td><xsl:value-of select="text"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
