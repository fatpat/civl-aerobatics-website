### {{ trick.name }}{% if trick.name_alt %} ({{ trick.name_alt }}){% endif %}
<ul>
  {% if trick.description %}<li>{{ trick.description }}</li>{% endif %}
  {% if trick.minimum %}<li>Minimum: {{ trick.minimum }}</li>{% endif %}
  <li>Criterias:
    <ul>
      {% if trick.criteria.normal %}<li>{{ trick.name }}: {{ trick.criteria.normal }}</li>{% endif %}
      {% if trick.criteria.twist %}<li>Twisted {{ trick.name }}: {{ trick.criteria.twist }}</li>{% endif %}
      {% if trick.criteria.twist_exit %}<li>Twisted {{ trick.name }} witch Twisted Exit: {{ trick.criteria.twist_exit }}</li>{% endif %}
      {% if trick.criteria.twist_full %}<li>{{ trick.name }} Full Twisted: {{ trick.criteria.twist_full }}</li>{% endif %}
      {% if trick.criteria.reverse %}<li>{{ trick.name }} Reverse: {{ trick.criteria.reverse }}</li>{% endif %}
      {% if trick.criteria.flip %}<li>{{ trick.name }} Flip: {{ trick.criteria.flip }}</li>{% endif %}
      {% if trick.criteria.double_flip %}<li>{{ trick.name }} Double Flip: {{ trick.criteria.double_flip }}</li>{% endif %}
    </ul>
  </li>
  <li>{% if trick.connection %}{{ trick.connection }}{% else %}Free Connection{% endif %}</li>
  {% if trick.forbid %}<li>{{ trick.forbid }}</li>{% endif %}
  {% if trick.repetition_allowed %}<li>Repetition allowed according to chapter <a href="##">Exceptions to Repetition</a></li>{% endif %}
  <li>Technical scoring coefficient: {{ trick.coef }}</li>
  <li>Coreography Bonuses:
    <ul>
      {% if trick.bonus.twist %}<li>Twisted: {{ trick.bonus.twist }}%</li>{% endif %}
      {% if trick.bonus.twist_exit %}<li>Twisted Exit: {{ trick.bonus.twist_exit }}%</li>{% endif %}
      {% if trick.bonus.twist_full %}<li>Full Twisted: {{ trick.bonus.twist_full }}%</li>{% endif %}
      {% if trick.bonus.reverse %}<li>Reverse: {{ trick.bonus.reverse }}%</li>{% endif %}
      {% if trick.bonus.flip %}<li>Flip: {{ trick.bonus.flip }}%</li>{% endif %}
      {% if trick.bonus.double_flip %}<li>Double Flip: {{ trick.bonus.flip_double }}%</li>{% endif %}
    </ul>
  </li>
</ul>
