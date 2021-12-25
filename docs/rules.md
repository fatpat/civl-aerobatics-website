---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: FAI Sporting Code, Section 7B 
---
<h1>Table of Content</h1>
<div id="toc"></div>
<div class="head_numbering" id="rules">
{% for rule in site.rules %}
{{ rule.title | prepend: "# " | markdownify }}
{{ rule.content | markdownify}}
{% endfor %}
</div>
