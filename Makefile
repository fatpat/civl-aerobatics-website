
FILENAME=Sporting_Code_S7_B_-_Aerobatics
TITLE=$(subst _, ,$(FILENAME))
OUT=$(FILENAME).html

$(OUT): *.md
	pandoc *.md -s --number-sections --toc --metadata title="$(TITLE)" -o "$@"
