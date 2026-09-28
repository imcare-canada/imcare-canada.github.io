---
layout: page
title: Directions
heading: "Getting to IMCare"
lede: "Our office is in Port Hope, Ontario. We look forward to seeing you."
description: "Directions to IMCare at 15 Henderson Street, Port Hope, Ontario, with map and parking information."
wide: true
---

{%- assign S = site.data.site -%}

<div class="info-grid" style="margin-bottom: var(--s5)">
  <div class="info-card">
    <h3>{% include icon.html name="pin" %} Port Hope Office</h3>
    <ul class="detail-list">
      <li><span class="k">Address</span><span class="v">{{ S.address.line1 }}<br>{{ S.address.city }} {{ S.address.province }} {{ S.address.postal_code }}</span></li>
      <li><span class="k">Telephone</span><span class="v"><a href="tel:{{ S.phone_link }}">{{ S.phone }}</a></span></li>
      <li><span class="k">Fax</span><span class="v">{{ S.fax }}</span></li>
    </ul>
    <p style="margin-top:1rem"><em>{{ S.address.landmark }}</em></p>
    <p><a class="btn btn--outline btn--sm" href="{{ S.address.maps_url }}" target="_blank" rel="noopener">{% include icon.html name="external" %} Open in Google Maps</a></p>
  </div>
  <div class="info-card">
    <h3>{% include icon.html name="clock" %} Hours</h3>
    <ul class="detail-list">
      <li><span class="k">Open</span><span class="v">{{ S.hours.summary }}</span></li>
      <li><span class="k">Booking</span><span class="v" style="font-weight:400">{{ S.hours.note }}</span></li>
      <li><span class="k">Holidays</span><span class="v" style="font-weight:400">{{ S.hours.holidays }}</span></li>
    </ul>
    <p style="margin-top:1rem">Please bring your health card, a list of your current medications, and any test results or letters you have been given.</p>
    <p><strong>{{ S.cancellation_notice }}</strong></p>
  </div>
</div>

<div class="map-frame">
  <iframe
    title="Map showing IMCare at 15 Henderson Street, Port Hope, Ontario"
    src="https://www.google.com/maps?q=15+Henderson+Street,+Port+Hope,+ON+L1A+0C6&output=embed"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen></iframe>
</div>
