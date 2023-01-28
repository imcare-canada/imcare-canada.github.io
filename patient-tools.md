---
title: Patient Tools
layout: primary
description: Patient Tools
head_content: |
    # Patient <span style='color: #9d2940'>Tools</span>
---
<div class="container pb-6">
   {% for section in site.data.patient_tools %}
        <div class="row">
        <h2 class="section-title">{{section.name}}</h2>
            {% for subsection in section.subsections %}
                <div class="col-md-4 mb-2 subsection">
                    <h3>{{ subsection.name }}</h3>
                    <ul>
                    {% for element in subsection.elements %}
                        <li><a href="{{ element.link | relative_url }}" target="_blank">{{ element.name }}</a></li>
                    {% endfor %}
                    </ul>
                 </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>