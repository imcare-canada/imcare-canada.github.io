---
layout: page
title: Contact
heading: "Contact IMCare"
lede: "We understand and welcome that you may need to contact us from time to time. Please review the following to enhance your care."
description: "How to reach IMCare in Port Hope, Ontario — secure messaging, phone, fax, prescription refills, appointments and test results."
wide: true
hide_cta: true
---

{%- assign S = site.data.site -%}

<div class="callout">
  <h3>{% include icon.html name="message" %} The fastest way to reach us</h3>
  <p>Send a secure message to your healthcare provider through our patient portal. It goes straight to your care team and keeps your health information private.</p>
  <p style="margin-top:1rem"><a class="btn btn--primary" href="{{ S.secure_message_url }}" target="_blank" rel="noopener">Send a secure message</a></p>
</div>

<div class="info-grid" style="margin-block: var(--s5)">

  <div class="info-card">
    <h3>{% include icon.html name="pill" %} Prescription refills</h3>
    <ul>
      <li>Call your pharmacist and ask them to send a refill request to the prescribing physician.</li>
      <li>We return all refill requests within <strong>10 business days</strong>.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>{% include icon.html name="calendar" %} Appointments</h3>
    <ul>
      <li><strong>{{ S.cancellation_notice }}</strong></li>
      <li>To change an appointment, message us through the patient portal or call the office.</li>
      <li>You can ask to set up a home video visit.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>{% include icon.html name="flask" %} Test results</h3>
    <ul>
      <li>If we have ordered a test, we schedule a follow-up visit, home video visit, or phone call.</li>
      <li>If you do not have a visit scheduled to review your test results, please call us and schedule one.</li>
      <li><strong>Please do not assume that if you did not hear from us, your test was normal.</strong></li>
    </ul>
  </div>

  <div class="info-card">
    <h3>{% include icon.html name="phone" %} Phone messages</h3>
    <ul>
      <li>All phone messages are returned within <strong>2 working days</strong>. If you have not heard back, please call again.</li>
      <li>We do not provide medical advice by phone or email.</li>
    </ul>
  </div>

</div>

<div class="callout callout--warn">
  <h3>{% include icon.html name="alert" %} In an emergency</h3>
  <p>If you are having chest pain, difficulty breathing, signs of a stroke, or another medical emergency, <strong>call 911 or go to your nearest emergency department</strong>. Do not use this website or the patient portal to report an emergency.</p>
</div>

<h2>Reach us directly</h2>

<div class="info-grid">
  <div class="info-card">
    <h3>{% include icon.html name="phone" %} By phone and fax</h3>
    <ul class="detail-list">
      <li><span class="k">Telephone</span><span class="v"><a href="tel:{{ S.phone_link }}">{{ S.phone }}</a></span></li>
      <li><span class="k">Fax</span><span class="v">{{ S.fax }}</span></li>
    </ul>
  </div>
  <div class="info-card">
    <h3>{% include icon.html name="pin" %} In person</h3>
    <ul class="detail-list">
      <li><span class="k">Address</span><span class="v">{{ S.address.line1 }}<br>{{ S.address.city }} {{ S.address.province }} {{ S.address.postal_code }}</span></li>
      <li><span class="k">Finding us</span><span class="v" style="font-weight:400">{{ S.address.landmark }}</span></li>
      <li><span class="k">Hours</span><span class="v">{{ S.hours.summary }}<br><span style="font-weight:400">{{ S.hours.note }} {{ S.hours.holidays }}</span></span></li>
    </ul>
    <p style="margin-top:1rem"><a class="btn btn--outline btn--sm" href="{{ '/directions/' | relative_url }}">Directions and map</a></p>
  </div>
</div>

<h2>For referring providers</h2>

<p>Family physicians and nurse practitioners can refer to IMCare by fax at <strong>{{ S.fax }}</strong>. Our <a href="{{ S.referral_form | relative_url }}" target="_blank" rel="noopener">referral form is available as a PDF</a>.</p>
