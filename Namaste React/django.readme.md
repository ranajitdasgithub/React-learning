templates/
base/
base.html
navbar.html

homepage/
index.html

- index.html
  {% extends "../base/base.html"%}
  {%block title%}Index Page {%end block%}
  {%block template%}
  {%include "../base/navbar.html"%}
  {%endblock%}
