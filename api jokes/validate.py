from lxml import etree

xsd_schema = etree.XMLSchema(etree.parse("jokes.xsd"))
xml_data = etree.parse("jokes.xml")
is_valid = xsd_schema.validate(xml_data)
if is_valid:
    xslt = etree.XSLT(etree.parse("jokes.xsl"))
    transformed_data = xslt(xml_data)
    with open("jokes.html", "wb") as output_file:
        output_file.write(etree.tostring(transformed_data, pretty_print=True))
    print("Transformation Done. HTML file saved as 'jokes.html'")
else:
    print("Validation failed. Please check your XML data against the XSD schema.")
