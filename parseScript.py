#open up the file into here
#open up the file where it will be moved into as a .json
#put opening '[' into .json file
#write script to go through lines in input file, while skipping columns
#   parse line
#   output line into .json file
#put closing ']' into .json file
import json

file_output = open('./output.json', 'w')

group = ''
category = ''
description = ''

with open('./input.tsv', 'r') as file_input:
    for line in file_input:
            fields = line.split("\t")

            file_dict = {}

            group = fields[2].capitalize()
            category = fields[3]
            description = fields[5]

            file_dict[group] = group
            file_dict[category] = category
            file_dict[description] = description

            json.dump(file_dict, file_output, sort_keys=False)

            file_output.write(",")

file_input.close()
file_output.close()
