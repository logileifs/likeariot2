#!/usr/bin/env python
import re
import sys
from lxml import etree as et
#import xml.etree.ElementTree as et

file_name = sys.argv[1]
print('detranslating %s' % file_name)

#print('sanitizing xml file')
#file = open(file_name, 'rw')

#with open(file_name, 'r+b') as old_file:
#	for line in old_file:
#		new_line = line.replace('', '\x30')
#		old_file.write(new_line)

parser = et.XMLParser(strip_cdata=False, ns_clean=False)
tree = et.parse(file_name, parser)
root = tree.getroot()
print('root: %s' % root)
channel = root.find('channel')
print(channel.text)
items = channel.findall('item')
for item in items:
	content = items[0].find('{http://purl.org/rss/1.0/modules/content/}encoded')
	#text = content.text
	#print('content.text: %s' % content.text)
	new_text = re.sub('<!--:en-->[\s\S]*?<!--:-->', '', content.text)
	content.text = et.CDATA(new_text)
	#print('new.text: %s' % new_text)

tree.write('output.xml', encoding='utf-8', xml_declaration=True)
#etree.dump(french_tree)
