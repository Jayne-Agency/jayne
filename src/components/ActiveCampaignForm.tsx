"use client";

import { useEffect, useRef } from "react";

const FORM_CSS = `
@import url(https://fonts.bunny.net/css?family=opensans:400,600|playfairdisplay:700);
#_form_3_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0;box-shadow:0px 1px 13px 0px rgba(0, 0, 0, 0.3)}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_3_._form-top{top:0}#_form_3_._form-bottom{bottom:0}#_form_3_._form-left{left:0}#_form_3_._form-right{right:0}#_form_3_ input[type="text"],#_form_3_ input[type="tel"],#_form_3_ input[type="date"],#_form_3_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_3_ textarea{resize:none}#_form_3_ input::placeholder{color:#333}#_form_3_ ._submit{cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#f37321 !important;border:2px solid #f37321 !important;-moz-border-radius:30px !important;-webkit-border-radius:30px !important;border-radius:30px !important;width:100%;color:#ffffff !important;padding:15px !important}#_form_3_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_3_ ._submit.processing{position:relative}#_form_3_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#f37321, #f37321), conic-gradient(#f37321, #ffffff);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_3_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_3_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_3_ ._close-icon:before{position:relative}#_form_3_ ._form-body{margin-bottom:30px}#_form_3_ ._form-image-left{width:150px;float:left}#_form_3_ ._form-content-right{margin-left:164px}#_form_3_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_3_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_3_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_3_ ._form-label,#_form_3_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_3_._dark ._form-branding{color:#333}#_form_3_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_3_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_3_ ._form_element *{font-size:14px}#_form_3_ ._form_element._clear{clear:both;width:100%;float:none}#_form_3_ ._form_element._clear:after{clear:left}#_form_3_ ._form_element textarea,#_form_3_ ._form_element select,#_form_3_ ._form_element input[type="text"],#_form_3_ ._form_element input[type="date"],#_form_3_ ._form_element input[type="phone"],#_form_3_ ._form_element input[type="email"]{background:white;color:#333 !important;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;border-radius:5px;padding:12px}#_form_3_ ._form_element input[type="text"],#_form_3_ ._form_element input[type="date"],#_form_3_ ._form_element select,#_form_3_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_3_ ._field-wrapper{position:relative}#_form_3_ ._inline-style{float:left}#_form_3_ ._inline-style input[type="text"]{width:150px}#_form_3_ ._inline-style:not(._clear){margin-right:20px}#_form_3_ ._form_element img._form-image{max-width:100%}#_form_3_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_3_ ._clear-element{clear:left}#_form_3_ ._full_width{width:100%}#_form_3_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_3_ input[type="text"]._has_error,#_form_3_ textarea._has_error{border:#F37C7B 1px solid}#_form_3_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_3_ ._show_be_error{float:left}#_form_3_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_3_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_3_ ._error._below{padding-top:8px;top:100%;right:0}#_form_3_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_3_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_3_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_3_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_3_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_3_ ._button-wrapper ._error-inner._form_error{position:static}#_form_3_ ._error-inner._no_arrow{margin-bottom:10px}#_form_3_ ._error-arrow{position:absolute;width:0;height:0}#_form_3_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_3_ input[type="text"].datetime_date{width:69%;display:inline}#_form_3_ select.datetime_time{width:29%;display:inline;height:32px}#_form_3_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_3_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_3_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_3_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_3_ ._form-content{margin:0;width:100%}#_form_3_ ._form-inner{display:block;min-width:100%}#_form_3_ ._form-title,#_form_3_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_3_ ._form-title{font-size:1.2em}#_form_3_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_3_ ._form-element,#_form_3_ ._inline-style,#_form_3_ input[type="text"],#_form_3_ label,#_form_3_ p,#_form_3_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_3_ ._row._checkbox-radio label{display:inline}#_form_3_ ._row,#_form_3_ p,#_form_3_ label{margin-bottom:0.7em;width:100%}#_form_3_ ._row input[type="checkbox"],#_form_3_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_3_ ._row input[type="checkbox"]+span label{display:inline}#_form_3_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_3_ ._form-image{max-width:100%;height:auto !important}#_form_3_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em}#_form_3_ input[type="radio"],#_form_3_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_3_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_3_ ._inline-style{margin:20px 0 0 !important}#_form_3_ ._inline-style input[type="text"]{width:100%}}#_form_3_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_3_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_3_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_3_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_3_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_3_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_3_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_3_ .field-required{color:#FF0000}#_form_3_{position:relative;text-align:left;margin:25px auto 0;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#faf6f0 !important;border-top:2px solid #f37321 !important;border-right:2px solid #f37321 !important;border-bottom:2px solid #f37321 !important;border-left:2px solid #f37321 !important;max-width:450px;-moz-border-radius:8px !important;-webkit-border-radius:8px !important;border-radius:8px !important;color:#333333}#_form_3_ ._show_be_error{min-width:100%}#_form_3_._inline-form,#_form_3_._inline-form ._form-content{font-family:Open Sans;font-size:16px;font-weight:400}#_form_3_._inline-form ._row span:not(.field-required),#_form_3_._inline-form ._row label{font-family:Open Sans;font-size:14px;font-weight:400;line-height:1.6em;color:#333 !important}#_form_3__inlineform input[type="text"],#_form_3__inlineform input[type="date"],#_form_3__inlineform input[type="tel"],#_form_3__inlineform select,#_form_3__inlineform textarea:not(.g-recaptcha-response){font-family:Open Sans;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_3_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_3_._inline-form .sms_consent_message,#_form_3_._inline-form ._form-thank-you{font-family:Open Sans;font-size:16px;font-weight:400;color:#333 !important}#_form_3_._inline-form ._form-label,#_form_3_._inline-form ._form-emailidentifier,#_form_3_._inline-form ._form-checkbox-option-label{font-family:Open Sans;font-size:14px;font-weight:700;line-height:1.6em;color:#333 !important}#_form_3_._inline-form ._submit{margin-top:12px;font-family:Open Sans;font-size:16px;font-weight:600}#_form_3_._inline-form ._html-code h1,#_form_3_._inline-form ._html-code h2,#_form_3_._inline-form ._html-code h3,#_form_3_._inline-form ._html-code h4,#_form_3_._inline-form ._html-code h5,#_form_3_._inline-form ._html-code h6,#_form_3_._inline-form ._form-title{font-family:Playfair Display;font-size:24px;line-height:normal;font-weight:700;color:#333;margin-bottom:0;display:block}#_form_3_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_3_:before,#_form_3_:after{content:" ";display:table}#_form_3_:after{clear:both}#_form_3_._inline-style{width:auto;display:inline-block}#_form_3_._inline-style input[type="text"],#_form_3_._inline-style input[type="date"]{padding:10px 12px}#_form_3_._inline-style button._inline-style{position:relative;top:27px}#_form_3_._inline-style p{margin:0}#_form_3_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_3_._inline-style ._button-wrapper:not(._clear){margin-left:0}#_form_3_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_3_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_3_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_3_ .iti{width:100%}#_form_3_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_3_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_3_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_3_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_3_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_3_ .iti__country-list--dropup{margin-bottom:4px}#_form_3_ .phone-error-hidden{display:none}#_form_3_ .phone-error{color:#E40E49}#_form_3_ .phone-input-error{border:1px solid #E40E49 !important}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_3_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}
`;

const FORM_HTML = `
<form method="POST" action="https://jayneagency.activehosted.com/proc.php" id="_form_3_" class="_form _form_3 _inline-form" novalidate data-styles-version="5">
  <input type="hidden" name="u" value="3" />
  <input type="hidden" name="f" value="3" />
  <input type="hidden" name="s" />
  <input type="hidden" name="c" value="0" />
  <input type="hidden" name="m" value="0" />
  <input type="hidden" name="act" value="sub" />
  <input type="hidden" name="v" value="2" />
  <input type="hidden" name="or" value="e0cf4def-05b1-4efb-aa2f-3f429795c02c" />
  <div class="_form-content">
    <div class="_form_element _field_header _full_width _clear">
      <h2 class="_form-title">Stay Updated on Clarity University</h2>
    </div>
    <div class="_form_element _field_html _full_width _clear">
      <div class="_html-code">
        Get notified about new cohort openings, exciting add-ons, and the latest offerings from Clarity University. Join our community of business leaders committed to brand clarity.
      </div>
    </div>
    <div class="_form_element _field_firstname _full_width">
      <label for="firstname" class="_form-label">First Name<span class="field-required"> *</span></label>
      <div class="_field-wrapper">
        <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required/>
      </div>
    </div>
    <div class="_form_element _field_email _full_width">
      <label for="email" class="_form-label">Email Address<span class="field-required"> *</span></label>
      <div class="_field-wrapper">
        <input type="text" id="email" name="email" placeholder="Enter your email address" required/>
      </div>
    </div>
    <div class="_form_element _field_customer_account _full_width">
      <label for="customer_account" class="_form-label">Company/Organization</label>
      <div class="_field-wrapper">
        <input type="text" id="customer_account" name="customer_account" placeholder="Enter your company name" />
      </div>
    </div>
    <div class="_button-wrapper _full_width">
      <button id="_form_3_submit" class="_submit" type="submit">Stay Updated</button>
    </div>
    <div class="_clear-element"></div>
  </div>
  <div class="_form-thank-you" style="display:none;"></div>
</form>
`;

export default function ActiveCampaignForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const w = window as Record<string, unknown>;
    w.cfields = [];

    w._show_thank_you = function (id: string, message: string, trackcmp_url: string, email: string) {
      const form = document.getElementById('_form_' + id + '_');
      if (!form) return;
      const thank_you = form.querySelector('._form-thank-you') as HTMLElement;
      const content = form.querySelector('._form-content') as HTMLElement;
      if (content) content.style.display = 'none';
      if (thank_you) {
        thank_you.innerHTML = message;
        thank_you.style.display = 'block';
        thank_you.setAttribute('tabindex', '-1');
        thank_you.focus();
      }
      const vgoAlias = typeof (w as Record<string, unknown>).visitorGlobalObjectAlias === 'undefined' ? 'vgo' : (w as Record<string, unknown>).visitorGlobalObjectAlias as string;
      const visitorObject = w[vgoAlias] as ((cmd: string, val: string) => void) | undefined;
      if (email && typeof visitorObject !== 'undefined') {
        visitorObject('setEmail', email);
        visitorObject('update', '');
      } else if (trackcmp_url) {
        _loadScript(trackcmp_url);
      }
      if (typeof w._form_callback === 'function') (w._form_callback as (id: string) => void)(id);
    };

    w._show_error = function (id: string, message: string, html?: string) {
      const form = document.getElementById('_form_' + id + '_');
      if (!form) return;
      const button = form.querySelector('button[type="submit"]');
      const old_error = form.querySelector('._form_error');
      if (old_error && old_error.parentNode) old_error.parentNode.removeChild(old_error);
      const err = document.createElement('div');
      err.innerHTML = message;
      err.className = '_error-inner _form_error _no_arrow';
      const wrapper = document.createElement('div');
      wrapper.className = '_form-inner _show_be_error';
      wrapper.appendChild(err);
      if (button && button.parentNode) button.parentNode.insertBefore(wrapper, button);
      const submitButton = form.querySelector('[id^="_form"][id$="_submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.classList.remove('processing');
      }
      if (html) {
        const div = document.createElement('div');
        div.className = '_error-html';
        div.innerHTML = html;
        err.appendChild(div);
      }
    };

    function _loadScript(url: string, callback?: () => void, isSubmit?: boolean) {
      const head = document.querySelector('head');
      if (!head) return;
      const script = document.createElement('script');
      let r = false;
      script.charset = 'utf-8';
      script.src = url;
      if (callback) {
        script.onload = script.onreadystatechange = function () {
          if (!r && (!(this as HTMLScriptElement & { readyState?: string }).readyState || (this as HTMLScriptElement & { readyState?: string }).readyState === 'complete')) {
            r = true;
            callback();
          }
        };
      }
      script.onerror = function () {
        if (isSubmit) {
          if (script.src.length > 10000) {
            (w._show_error as (id: string, msg: string) => void)("3", "Sorry, your submission failed. Please shorten your responses and try again.");
          } else {
            (w._show_error as (id: string, msg: string) => void)("3", "Sorry, your submission failed. Please try again.");
          }
          const submitButton = document.querySelector('#_form_3_submit') as HTMLButtonElement;
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('processing');
          }
        }
      };
      head.appendChild(script);
    }

    w._load_script = _loadScript;

    const form_to_submit = document.getElementById('_form_3_') as HTMLFormElement;
    if (!form_to_submit) return;

    const allInputs = form_to_submit.querySelectorAll('input, select, textarea') as NodeListOf<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    let tooltips: Array<{ tip: HTMLElement; elem: HTMLElement; no_arrow?: boolean }> = [];
    let submitted = false;

    const getUrlParam = function (name: string) {
      if (name.toLowerCase() !== 'email') {
        const params = new URLSearchParams(window.location.search);
        return params.get(name) || false;
      }
      const qString = window.location.search;
      if (!qString) return false;
      const parameters = qString.substr(1).split('&');
      for (let i = 0; i < parameters.length; i++) {
        const parameter = parameters[i].split('=');
        if (parameter[0].toLowerCase() === 'email') {
          return parameter[1] === undefined ? true : decodeURIComponent(parameter[1]);
        }
      }
      return false;
    };

    for (let i = 0; i < allInputs.length; i++) {
      const input = allInputs[i] as HTMLInputElement;
      const regexStr = "field\\[(\\d+)\\]";
      const results = new RegExp(regexStr).exec(input.name);
      if (results != undefined) {
        input.dataset.name = input.name.match(/\[time\]$/)
          ? `${(w.cfields as string[])[parseInt(results[1])]}_time`
          : (w.cfields as string[])[parseInt(results[1])];
      } else {
        input.dataset.name = input.name;
      }
      const fieldVal = getUrlParam(input.dataset.name || '');
      if (fieldVal && typeof fieldVal === 'string') {
        if (input.dataset.autofill === "false") continue;
        if (input.type === "radio" || input.type === "checkbox") {
          if (input.value === fieldVal) input.checked = true;
        } else {
          input.value = fieldVal;
        }
      }
    }

    const remove_tooltips = function () {
      for (let i = 0; i < tooltips.length; i++) {
        if (tooltips[i].tip.parentNode) tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
      }
      tooltips = [];
    };

    const remove_tooltip = function (elem: HTMLElement) {
      for (let i = 0; i < tooltips.length; i++) {
        if (tooltips[i].elem === elem) {
          if (tooltips[i].tip.parentNode) tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
          tooltips.splice(i, 1);
          return;
        }
      }
    };

    const create_tooltip = function (elem: HTMLElement, text: string) {
      const tooltip = document.createElement('div');
      const arrow = document.createElement('div');
      const inner = document.createElement('div');
      const new_tooltip: { tip: HTMLElement; elem: HTMLElement; no_arrow?: boolean } = { tip: tooltip, elem: elem };
      tooltip.id = `${elem.id}-error`;
      tooltip.setAttribute('role', 'alert');
      if ((elem as HTMLInputElement).type !== 'radio' && ((elem as HTMLInputElement).type !== 'checkbox' || (elem as HTMLInputElement).name === 'sms_consent')) {
        tooltip.className = '_error';
        arrow.className = '_error-arrow';
        inner.className = '_error-inner';
        inner.innerHTML = text;
        tooltip.appendChild(arrow);
        tooltip.appendChild(inner);
        if (elem.parentNode) elem.parentNode.appendChild(tooltip);
      } else {
        tooltip.className = '_error-inner _no_arrow';
        tooltip.innerHTML = text;
        if (elem.parentNode) elem.parentNode.insertBefore(tooltip, elem);
        new_tooltip.no_arrow = true;
      }
      tooltips.push(new_tooltip);
      return new_tooltip;
    };

    const resize_tooltip = function (tooltip: { tip: HTMLElement; elem: HTMLElement }) {
      const rect = tooltip.elem.getBoundingClientRect();
      const doc = document.documentElement;
      const scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));
      if (scrollPosition < 40) {
        tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
      } else {
        tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
      }
    };

    const resize_tooltips = function () {
      for (let i = 0; i < tooltips.length; i++) {
        if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
      }
    };

    const validate_field = function (elem: HTMLInputElement, remove?: boolean) {
      let tooltip = null;
      const value = elem.value;
      let no_error = true;
      if (remove) remove_tooltip(elem);
      elem.removeAttribute('aria-invalid');
      elem.removeAttribute('aria-describedby');
      if (elem.type !== 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
      if (elem.getAttribute('required') !== null) {
        if (elem.type === 'radio' || (elem.type === 'checkbox' && /any/.test(elem.className))) {
          const elems = form_to_submit.elements[elem.name as keyof HTMLFormControlsCollection];
          if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
            no_error = elem.checked;
          } else {
            no_error = false;
            for (let i = 0; i < elems.length; i++) {
              if ((elems[i] as HTMLInputElement).checked) no_error = true;
            }
          }
          if (!no_error) tooltip = create_tooltip(elem, "Please select an option.");
        } else if (elem.type === 'checkbox') {
          const elems = form_to_submit.elements[elem.name as keyof HTMLFormControlsCollection] as unknown as HTMLInputElement[];
          let found = false;
          const err: string[] = [];
          no_error = true;
          for (let i = 0; i < elems.length; i++) {
            if (elems[i].getAttribute('required') === null) continue;
            if (!found && elems[i] !== elem) return true;
            found = true;
            elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
            if (!elems[i].checked) {
              no_error = false;
              elems[i].className = elems[i].className + ' _has_error';
              err.push("Checking " + elems[i].value + " is required");
            }
          }
          if (!no_error) tooltip = create_tooltip(elem, err.join('<br/>'));
        } else if (elem.tagName === 'SELECT') {
          let selected = true;
          const selectElem = elem as unknown as HTMLSelectElement;
          if (selectElem.multiple) {
            selected = false;
            for (let i = 0; i < selectElem.options.length; i++) {
              if (selectElem.options[i].selected) { selected = true; break; }
            }
          } else {
            for (let i = 0; i < selectElem.options.length; i++) {
              if (selectElem.options[i].selected && (!selectElem.options[i].value || selectElem.options[i].value.match(/\n/g))) {
                selected = false;
              }
            }
          }
          if (!selected) {
            elem.className = elem.className + ' _has_error';
            no_error = false;
            tooltip = create_tooltip(elem, "Please select an option.");
          }
        } else if (value === undefined || value === null || value === '') {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "This field is required.");
        }
      }
      if (no_error && elem.name === 'email') {
        if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "Enter a valid email address.");
        }
      }
      if (tooltip) resize_tooltip(tooltip);
      if (!no_error && elem.hasAttribute('id')) {
        elem.setAttribute('aria-invalid', 'true');
        elem.setAttribute('aria-describedby', `${elem.id}-error`);
      }
      return no_error;
    };

    const needs_validate = function (el: HTMLInputElement) {
      if (el.getAttribute('required') !== null) return true;
      if ((el.name === 'email' || el.id === 'phone' || el.id === 'sms_consent') && el.value !== "") return true;
      return false;
    };

    const _form_serialize = function (form: HTMLFormElement) {
      const q: string[] = [];
      for (let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement;
        if (el.name === "") continue;
        switch (el.nodeName) {
          case "INPUT":
            switch ((el as HTMLInputElement).type) {
              case "text": case "number": case "date": case "time": case "hidden": case "password": case "button": case "reset": case "submit":
                q.push(el.name + "=" + encodeURIComponent(el.value));
                break;
              case "checkbox": case "radio":
                if ((el as HTMLInputElement).checked) q.push(el.name + "=" + encodeURIComponent(el.value));
                break;
            }
            break;
          case "TEXTAREA":
            q.push(el.name + "=" + encodeURIComponent(el.value));
            break;
          case "SELECT": {
            const selectEl = el as HTMLSelectElement;
            if (selectEl.type === "select-one") {
              q.push(el.name + "=" + encodeURIComponent(el.value));
            } else if (selectEl.type === "select-multiple") {
              for (let j = 0; j < selectEl.options.length; j++) {
                if (selectEl.options[j].selected) q.push(el.name + "=" + encodeURIComponent(selectEl.options[j].value));
              }
            }
            break;
          }
          case "BUTTON": {
            const btnType = (el as HTMLButtonElement).type;
            if (btnType === "reset" || btnType === "submit" || btnType === "button") {
              q.push(el.name + "=" + encodeURIComponent(el.value));
            }
            break;
          }
        }
      }
      return q.join("&");
    };

    const validate_form = function (e?: Event) {
      let no_error = true;
      if (!submitted) {
        submitted = true;
        for (let i = 0; i < allInputs.length; i++) {
          const input = allInputs[i] as HTMLInputElement;
          if (needs_validate(input)) {
            if (input.type === 'text' || input.type === 'number' || input.type === 'time' || input.type === 'tel') {
              input.addEventListener('blur', function () { this.value = this.value.trim(); validate_field(this, true); });
              input.addEventListener('input', function () { validate_field(this, true); });
            } else if (input.type === 'radio' || input.type === 'checkbox') {
              (function (el: HTMLInputElement) {
                const radios = form_to_submit.elements[el.name as keyof HTMLFormControlsCollection];
                if (radios instanceof RadioNodeList || radios instanceof NodeList) {
                  for (let j = 0; j < radios.length; j++) {
                    (radios[j] as HTMLElement).addEventListener('change', function () { validate_field(el, true); });
                  }
                } else if (radios) {
                  (radios as HTMLElement).addEventListener('change', function () { validate_field(el, true); });
                }
              })(input);
            } else if (input.tagName === 'SELECT') {
              input.addEventListener('change', function () { validate_field(this as unknown as HTMLInputElement, true); });
            } else if (input.tagName === 'TEXTAREA') {
              input.addEventListener('input', function () { validate_field(this as unknown as HTMLInputElement, true); });
            }
          }
        }
      }
      remove_tooltips();
      for (let i = 0; i < allInputs.length; i++) {
        const elem = allInputs[i] as HTMLInputElement;
        if (needs_validate(elem)) {
          if (elem.tagName.toLowerCase() !== "select") elem.value = elem.value.trim();
          if (!validate_field(elem)) no_error = false;
        }
      }
      if (!no_error && e) e.preventDefault();
      if (!no_error) {
        const firstError = form_to_submit.querySelector('._has_error:not([disabled])') as HTMLElement;
        if (firstError && typeof firstError.focus === 'function') firstError.focus();
      }
      resize_tooltips();
      return no_error;
    };

    const form_submit = function (e: Event) {
      e.preventDefault();
      if (validate_form()) {
        const submitButton = form_to_submit.querySelector('#_form_3_submit') as HTMLButtonElement;
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.classList.add('processing');
        }
        const serialized = _form_serialize(form_to_submit).replace(/%0A/g, '\\n');
        const err = form_to_submit.querySelector('._form_error');
        if (err && err.parentNode) err.parentNode.removeChild(err);
        _loadScript('https://jayneagency.activehosted.com/proc.php?' + serialized + '&jsonp=true', undefined, true);
      }
      return false;
    };

    window.addEventListener('resize', resize_tooltips);
    window.addEventListener('scroll', resize_tooltips);
    form_to_submit.addEventListener('submit', form_submit);

    return () => {
      window.removeEventListener('resize', resize_tooltips);
      window.removeEventListener('scroll', resize_tooltips);
      form_to_submit.removeEventListener('submit', form_submit);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: FORM_HTML }} />
    </div>
  );
}
