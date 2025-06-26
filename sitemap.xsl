<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    exclude-result-prefixes="s">

<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">

    <html>
    <head>
        <title>Sitemap</title>
        <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            background: #fff;
            color: #333;
            padding: 2em;
        }
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
        }
        th {
            background: #f5f5f5;
        }
        a {
            color: #0073e6;
            text-decoration: none;
        }
        </style>
    </head>
    <body>
        <h1>XML Sitemap</h1>
        <table>
        <tr>
            <th>URL</th>
            <th>Change Frequency</th>
            <th>Priority</th>
        </tr>
        <xsl:for-each select="s:urlset/s:url">
            <tr>
            <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
            <td><xsl:value-of select="s:changefreq"/></td>
            <td><xsl:value-of select="s:priority"/></td>
            </tr>
        </xsl:for-each>
        </table>
    </body>
    </html>

</xsl:template>
</xsl:stylesheet>
