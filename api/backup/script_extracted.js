
function loadGTM() {
    return new Promise((resolve, reject) => {
        //Create the script element for GA
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TNRHNLK';
        //script.onload = resolve;
        script.onload = () => {
            console.log('GTM script loaded');
            resolve();
        }
            ;
        script.onerror = reject;
        document.head.appendChild(script);
    }
    );
}

async function initGTM() {
    try {
        await loadGTM();
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'GTM-TNRHNLK');
    } catch (error) {
        console.error('Failed to load GTM: ', error);
    }
}
initGTM();

(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TNRHNLK');

/* <![CDATA[ */
var gform;
gform || (document.addEventListener("gform_main_scripts_loaded", function () {
    gform.scriptsLoaded = !0
}),
    document.addEventListener("gform/theme/scripts_loaded", function () {
        gform.themeScriptsLoaded = !0
    }),
    window.addEventListener("DOMContentLoaded", function () {
        gform.domLoaded = !0
    }),
    gform = {
        domLoaded: !1,
        scriptsLoaded: !1,
        themeScriptsLoaded: !1,
        isFormEditor: () => "function" == typeof InitializeEditor,
        callIfLoaded: function (o) {
            return !(!gform.domLoaded || !gform.scriptsLoaded || !gform.themeScriptsLoaded && !gform.isFormEditor() || (gform.isFormEditor() && console.warn("The use of gform.initializeOnLoaded() is deprecated in the form editor context and will be removed in Gravity Forms 3.1."),
                o(),
                0))
        },
        initializeOnLoaded: function (o) {
            gform.callIfLoaded(o) || (document.addEventListener("gform_main_scripts_loaded", () => {
                gform.scriptsLoaded = !0,
                    gform.callIfLoaded(o)
            }
            ),
                document.addEventListener("gform/theme/scripts_loaded", () => {
                    gform.themeScriptsLoaded = !0,
                        gform.callIfLoaded(o)
                }
                ),
                window.addEventListener("DOMContentLoaded", () => {
                    gform.domLoaded = !0,
                        gform.callIfLoaded(o)
                }
                ))
        },
        hooks: {
            action: {},
            filter: {}
        },
        addAction: function (o, r, e, t) {
            gform.addHook("action", o, r, e, t)
        },
        addFilter: function (o, r, e, t) {
            gform.addHook("filter", o, r, e, t)
        },
        doAction: function (o) {
            gform.doHook("action", o, arguments)
        },
        applyFilters: function (o) {
            return gform.doHook("filter", o, arguments)
        },
        removeAction: function (o, r) {
            gform.removeHook("action", o, r)
        },
        removeFilter: function (o, r, e) {
            gform.removeHook("filter", o, r, e)
        },
        addHook: function (o, r, e, t, n) {
            null == gform.hooks[o][r] && (gform.hooks[o][r] = []);
            var d = gform.hooks[o][r];
            null == n && (n = r + "_" + d.length),
                gform.hooks[o][r].push({
                    tag: n,
                    callable: e,
                    priority: t = null == t ? 10 : t
                })
        },
        doHook: function (r, o, e) {
            var t;
            if (e = Array.prototype.slice.call(e, 1),
                null != gform.hooks[r][o] && ((o = gform.hooks[r][o]).sort(function (o, r) {
                    return o.priority - r.priority
                }),
                    o.forEach(function (o) {
                        "function" != typeof (t = o.callable) && (t = window[t]),
                            "action" == r ? t.apply(null, e) : e[0] = t.apply(null, e)
                    })),
                "filter" == r)
                return e[0]
        },
        removeHook: function (o, r, t, n) {
            var e;
            null != gform.hooks[o][r] && (e = (e = gform.hooks[o][r]).filter(function (o, r, e) {
                return !!(null != n && n != o.tag || null != t && t != o.priority)
            }),
                gform.hooks[o][r] = e)
        }
    });
/* ]]> */


{
    "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.digitalsilk.com/",
                "url": "https://www.digitalsilk.com/",
                "name": "Digital Silk: Web Design Agency [Top-Rated Company]",
                "isPartOf": {
                    "@id": "https://www.digitalsilk.com/#website"
                },
                "about": {
                    "@id": "https://www.digitalsilk.com/#organization"
                },
                "datePublished": "2022-07-08T13:30:55+00:00",
                "dateModified": "2024-11-26T14:01:52+00:00",
                "description": "As a full-service web design agency, we handle all of your digital needs under one roof. Schedule a consultation and get a custom quote for your project.",
                "breadcrumb": {
                    "@id": "https://www.digitalsilk.com/#breadcrumb"
                },
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            "https://www.digitalsilk.com/"
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.digitalsilk.com/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home"
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://www.digitalsilk.com/#website",
                "url": "https://www.digitalsilk.com/",
                "name": "Digital Silk",
                "description": "Growing Brands Online",
                "publisher": {
                    "@id": "https://www.digitalsilk.com/#organization"
                },
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://www.digitalsilk.com/?s={search_term_string}"
                        },
                        "query-input": {
                            "@type": "PropertyValueSpecification",
                            "valueRequired": true,
                            "valueName": "search_term_string"
                        }
                    }
                ],
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://www.digitalsilk.com/#organization",
                "name": "Full-Service Web Design Agency | Digital Silk",
                "url": "https://www.digitalsilk.com/",
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": "https://www.digitalsilk.com/#/schema/logo/image/",
                    "url": "https://www.digitalsilk.com/wp-content/uploads/2022/12/digitalsilk.com_social-share.jpg",
                    "contentUrl": "https://www.digitalsilk.com/wp-content/uploads/2022/12/digitalsilk.com_social-share.jpg",
                    "width": 1200,
                    "height": 600,
                    "caption": "Full-Service Web Design Agency | Digital Silk"
                },
                "image": {
                    "@id": "https://www.digitalsilk.com/#/schema/logo/image/"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/digitalsilk/",
                    "https://www.instagram.com/digital_silk/"
                ]
            }
        ]
}

/* <![CDATA[ */
var ds = {
    "ajax_url": "https:\/\/www.digitalsilk.com\/wp-admin\/admin-ajax.php",
    "query": "{\"error\":\"\",\"m\":\"\",\"p\":\"8\",\"post_parent\":\"\",\"subpost\":\"\",\"subpost_id\":\"\",\"attachment\":\"\",\"attachment_id\":0,\"name\":\"\",\"pagename\":\"\",\"page_id\":\"8\",\"second\":\"\",\"minute\":\"\",\"hour\":\"\",\"day\":0,\"monthnum\":0,\"year\":0,\"w\":0,\"category_name\":\"\",\"tag\":\"\",\"cat\":\"\",\"tag_id\":\"\",\"author\":\"\",\"author_name\":\"\",\"feed\":\"\",\"tb\":\"\",\"paged\":0,\"meta_key\":\"\",\"meta_value\":\"\",\"preview\":\"\",\"s\":\"\",\"sentence\":\"\",\"title\":\"\",\"fields\":\"\",\"menu_order\":\"\",\"embed\":\"\",\"category__in\":[],\"category__not_in\":[],\"category__and\":[],\"post__in\":[],\"post__not_in\":[],\"post_name__in\":[],\"tag__in\":[],\"tag__not_in\":[],\"tag__and\":[],\"tag_slug__in\":[],\"tag_slug__and\":[],\"post_parent__in\":[],\"post_parent__not_in\":[],\"author__in\":[],\"author__not_in\":[],\"search_columns\":[],\"ignore_sticky_posts\":false,\"suppress_filters\":false,\"cache_results\":true,\"update_post_term_cache\":true,\"update_menu_item_cache\":false,\"lazy_load_term_meta\":true,\"update_post_meta_cache\":true,\"post_type\":\"\",\"posts_per_page\":21,\"nopaging\":false,\"comments_per_page\":\"50\",\"no_found_rows\":false,\"order\":\"DESC\"}"
};
/* ]]> */




/* <![CDATA[ */
var objectL10n = {
    "yopPollParams": {
        "urlParams": {
            "ajax": "https:\/\/www.digitalsilk.com\/wp-admin\/admin-ajax.php",
            "wpLogin": "https:\/\/www.digitalsilk.com\/wp-login.php?redirect_to=https%3A%2F%2Fwww.digitalsilk.com%2Fwp-admin%2Fadmin-ajax.php%3Faction%3Dyop_poll_record_wordpress_vote"
        },
        "apiParams": {
            "reCaptcha": {
                "siteKey": ""
            },
            "reCaptchaV2Invisible": {
                "siteKey": ""
            },
            "reCaptchaV3": {
                "siteKey": ""
            },
            "hCaptcha": {
                "siteKey": ""
            }
        },
        "captchaParams": {
            "imgPath": "https:\/\/www.digitalsilk.com\/wp-content\/plugins\/yop-poll\/public\/assets\/img\/",
            "url": "https:\/\/www.digitalsilk.com\/wp-content\/plugins\/yop-poll\/app.php",
            "accessibilityAlt": "Sound icon",
            "accessibilityTitle": "Accessibility option: listen to a question and answer it!",
            "accessibilityDescription": "Type below the <strong>answer<\/strong> to what you hear. Numbers or words:",
            "explanation": "Click or touch the <strong>ANSWER<\/strong>",
            "refreshAlt": "Refresh\/reload icon",
            "refreshTitle": "Refresh\/reload: get new images and accessibility option!"
        },
        "voteParams": {
            "invalidPoll": "Invalid Poll",
            "noAnswersSelected": "No answer selected",
            "minAnswersRequired": "At least {min_answers_allowed} answer(s) required",
            "maxAnswersRequired": "A max of {max_answers_allowed} answer(s) accepted",
            "noAnswerForOther": "No other answer entered",
            "noValueForCustomField": "{custom_field_name} is required",
            "tooManyCharsForCustomField": "Text for {custom_field_name} is too long",
            "consentNotChecked": "You must agree to our terms and conditions",
            "noCaptchaSelected": "Captcha is required",
            "thankYou": "Thank you for your vote"
        },
        "resultsParams": {
            "singleVote": "vote",
            "multipleVotes": "votes",
            "singleAnswer": "answer",
            "multipleAnswers": "answers"
        }
    }
};
/* ]]> */





/* <![CDATA[ */
var gform_i18n = {
    "datepicker": {
        "days": {
            "monday": "Mo",
            "tuesday": "Tu",
            "wednesday": "We",
            "thursday": "Th",
            "friday": "Fr",
            "saturday": "Sa",
            "sunday": "Su"
        },
        "months": {
            "january": "January",
            "february": "February",
            "march": "March",
            "april": "April",
            "may": "May",
            "june": "June",
            "july": "July",
            "august": "August",
            "september": "September",
            "october": "October",
            "november": "November",
            "december": "December"
        },
        "firstDay": 1,
        "iconText": "Select date"
    }
};
var gf_legacy_multi = [];
var gform_gravityforms = {
    "strings": {
        "invalid_file_extension": "This type of file is not allowed. Must be one of the following:",
        "delete_file": "Delete this file",
        "in_progress": "in progress",
        "file_exceeds_limit": "File exceeds size limit",
        "illegal_extension": "This type of file is not allowed.",
        "max_reached": "Maximum number of files reached",
        "unknown_error": "There was a problem while saving the file on the server",
        "currently_uploading": "Please wait for the uploading to complete",
        "cancel": "Cancel",
        "cancel_upload": "Cancel this upload",
        "cancelled": "Cancelled"
    },
    "vars": {
        "images_url": "https:\/\/www.digitalsilk.com\/wp-content\/plugins\/gravityforms\/images"
    }
};
/* ]]> */


/* <![CDATA[ */

/* ]]> */



var _hsq = _hsq || [];
_hsq.push(["setContentType", "standard-page"]);



document.addEventListener("DOMContentLoaded", function () {
    var headings = document.querySelectorAll(".single-post__content-wrap h2, .single-post__content-wrap h3");
    headings.forEach(function (heading) {
        var headingText = heading.innerText || heading.textContent;
        // Replace dots and colons with hyphens in the heading text 
        var headingId = headingText.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
        headingId = headingId.replace(/-$/, "");
        var span = document.createElement("span");
        span.id = headingId;
        span.classList.add("scroll-off");
        heading.appendChild(span);
    });

    jQuery(".ez-toc-toggle").click(function (event) {
        event.preventDefault();
        // Prevent the default action 
        jQuery(".ez-toc-list").slideToggle("fast");
        jQuery("html, body").animate({
            scrollTop: jQuery("#ez-toc-container").offset().top
        }, 1000);
        // Adjust the duration as needed
    });
});


document.addEventListener('gform_post_render', function () {
    let disabled = document.querySelectorAll('.gf_readonly');
    disabled.forEach((element) => {
        element.querySelector('input').setAttribute('disabled', 'disabled');
    }
    );
    let mandatory = document.querySelectorAll('.mandatory');
    mandatory.forEach((element) => {
        element.querySelector('input[type=radio]').setAttribute('onclick', 'return false;');
    }
    );
});


document.getElementById("ak_js_1").setAttribute("value", (new Date()).getTime());


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    gformInitSpinner(9, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
    jQuery('#gform_ajax_frame_9').on('load', function () {
        var contents = jQuery(this).contents().find('*').html();
        var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;
        if (!is_postback) {
            return;
        }
        var form_content = jQuery(this).contents().find('#gform_wrapper_9');
        var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_9').length > 0;
        var is_redirect = contents.indexOf('gformRedirect(){') >= 0;
        var is_form = form_content.length > 0 && !is_redirect && !is_confirmation;
        var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;
        if (is_form) {
            jQuery('#gform_wrapper_9').html(form_content.html());
            if (form_content.hasClass('gform_validation_error')) {
                jQuery('#gform_wrapper_9').addClass('gform_validation_error');
            } else {
                jQuery('#gform_wrapper_9').removeClass('gform_validation_error');
            }
            setTimeout(function () {
                /* delay the scroll by 50 milliseconds to fix a bug in chrome */
                jQuery(document).scrollTop(jQuery('#gform_wrapper_9').offset().top - mt);
            }, 50);
            if (window['gformInitDatepicker']) {
                gformInitDatepicker();
            }
            if (window['gformInitPriceFields']) {
                gformInitPriceFields();
            }
            var current_page = jQuery('#gform_source_page_number_9').val();
            gformInitSpinner(9, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
            jQuery(document).trigger('gform_page_loaded', [9, current_page]);
            window['gf_submitting_9'] = false;
        } else if (!is_redirect) {
            var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').html();
            if (!confirmation_content) {
                confirmation_content = contents;
            }
            jQuery('#gform_wrapper_9').replaceWith(confirmation_content);
            jQuery(document).scrollTop(jQuery('#gf_9').offset().top - mt);
            jQuery(document).trigger('gform_confirmation_loaded', [9]);
            window['gf_submitting_9'] = false;
            wp.a11y.speak(jQuery('#gform_confirmation_message_9').text());
        } else {
            jQuery('#gform_9').append(contents);
            if (window['gformRedirect']) {
                gformRedirect();
            }
        }
        jQuery(document).trigger("gform_pre_post_render", [{
            formId: "9",
            currentPage: "current_page",
            abort: function () {
                this.preventDefault();
            }
        }]);
        if (event && event.defaultPrevented) {
            return;
        }
        const gformWrapperDiv = document.getElementById("gform_wrapper_9");
        if (gformWrapperDiv) {
            const visibilitySpan = document.createElement("span");
            visibilitySpan.id = "gform_visibility_test_9";
            gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
        }
        const visibilityTestDiv = document.getElementById("gform_visibility_test_9");
        let postRenderFired = false;
        function triggerPostRender() {
            if (postRenderFired) {
                return;
            }
            postRenderFired = true;
            jQuery(document).trigger('gform_post_render', [9, current_page]);
            gform.utils.trigger({
                event: 'gform/postRender',
                native: false,
                data: {
                    formId: 9,
                    currentPage: current_page
                }
            });
            gform.utils.trigger({
                event: 'gform/post_render',
                native: false,
                data: {
                    formId: 9,
                    currentPage: current_page
                }
            });
            if (visibilityTestDiv) {
                visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
            }
        }
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this
                    , args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate)
                        func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow)
                    func.apply(context, args);
            }
                ;
        }
        const debouncedTriggerPostRender = debounce(function () {
            triggerPostRender();
        }, 200);
        if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                        debouncedTriggerPostRender();
                        observer.disconnect();
                    }
                }
                );
            }
            );
            observer.observe(document.body, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeFilter: ['style', 'class'],
            });
        } else {
            triggerPostRender();
        }
    });
});
/* ]]&gt; */


{
    "@context": "https://schema.org",
        "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does a web design agency do? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>A web design agency grows your brand online by bringing a team of experts together to create a custom site that is optimized for SEO and drives higher conversions for more leads and increased sales. A custom website starts with a strategy and planning before going into design and development. The designs need to be responsive to ensure a good user experience on both mobile and desktop devices.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between web design and web development? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is responsive web design important? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>A great user experience is crucial across all devices \u2014 mobile, desktop, and tablets. Mobile devices, in particular, are highly popular, with research indicating that up to 80% of your website\u2019s visitors may access it first on a phone. First impressions are key, so it\u2019s vital that your site looks professional and is easy to navigate on mobile. Additionally, search engines prioritize mobile-friendly design and may lower your ranking if your site isn\u2019t optimized for mobile access.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to design a website? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>Designing a custom website involves several phases: strategy, planning, design, development, quality assurance, and launch. For an informational website, the process typically takes up to 3 months, allowing time for detailed design and client feedback. Larger, more complex sites with advanced features may require more than 3 months. This timeline includes thorough design of key pages and a user testing phase to ensure optimal performance.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much should I expect to pay for web design? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>The cost of a custom website depends on three main factors: the number of unique landing pages, backend features, and integrations. Informational websites with a few landing pages are less expensive and quicker to develop than complex sites with custom backend features, such as job portals or marketplaces.<\/p>\n<p>Costs vary based on the hourly rate and the total hours required. For instance, an informational site may take between 200 and 400 hours. If an agency charges $150 per hour, the starting cost would be approximately $30,000.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can you help me generate leads after my website is launched? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p><span class=\"TextRun SCXW9389717 BCX0\" lang=\"EN-US\" xml:lang=\"EN-US\" data-contrast=\"auto\"><span class=\"NormalTextRun SCXW9389717 BCX0\">As a full-service web design agency, we offer comprehensive marketing support to help generate qualified leads for your brand. Our marketing team provides tailored recommendations based on your goals, industry, and budget. We can design a custom monthly marketing plan to deliver effective results efficiently. Alternatively, we can develop a marketing strategy that you can implement internally, working seamlessly with your internal teams or other agencies to drive growth.<\/span><\/span><span class=\"EOP SCXW9389717 BCX0\" data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559740&quot;:276}\">\u00a0<\/span><\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer website redesign services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>Yes, we offer comprehensive website redesign services. Whether you want to refresh your site&#8217;s appearance, optimize user experience, or enhance overall performance, we can create a redesign that aligns perfectly with your brand and business objectives. Our focus is on crafting an engaging, effective online presence that delivers measurable results.<\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will my website be mobile-friendly? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p><span class=\"TextRun SCXW24076799 BCX0\" lang=\"EN-US\" xml:lang=\"EN-US\" data-contrast=\"auto\"><span class=\"NormalTextRun SCXW24076799 BCX0\">Absolutely. We prioritize <\/span><span class=\"NormalTextRun ContextualSpellingAndGrammarErrorV2Themed SCXW24076799 BCX0\">mobile-friendliness<\/span><span class=\"NormalTextRun SCXW24076799 BCX0\"> because research shows that up to 80% of users may leave your site if it <\/span><span class=\"NormalTextRun SCXW24076799 BCX0\">isn&#8217;t<\/span> <span class=\"NormalTextRun SCXW24076799 BCX0\">optimized<\/span><span class=\"NormalTextRun SCXW24076799 BCX0\"> for mobile. We <\/span><span class=\"NormalTextRun SCXW24076799 BCX0\">don&#8217;t<\/span><span class=\"NormalTextRun SCXW24076799 BCX0\"> simply stretch desktop designs to fit mobile screens; instead, we tailor the messaging, layout, and design specifically for mobile users. We use tools like Figma to ensure your site performs well on both desktop and mobile devices.<\/span><\/span><span class=\"EOP SCXW24076799 BCX0\" data-ccp-props=\"{&quot;201341983&quot;:0,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559740&quot;:276}\">\u00a0<\/span><\/p>\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you create a logo for my brand? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "<p>Yes, Digital Silk is a full-service agency with a dedicated branding team that can assist with naming, logo design, brand strategy, brand guidelines, and other branding services. Handling both your website and branding projects under one roof is cost-efficient and ensures that we leverage our comprehensive understanding of your brand to deliver cohesive and impactful results.<\/p>\n"
                    }
                }
            ]
}

document.addEventListener('gform_post_render', function () {
    let disabled = document.querySelectorAll('.gf_readonly');
    disabled.forEach((element) => {
        element.querySelector('input').setAttribute('disabled', 'disabled');
    }
    );
    let mandatory = document.querySelectorAll('.mandatory');
    mandatory.forEach((element) => {
        element.querySelector('input[type=radio]').setAttribute('onclick', 'return false;');
    }
    );
});


document.getElementById("ak_js_2").setAttribute("value", (new Date()).getTime());


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    gformInitSpinner(6, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
    jQuery('#gform_ajax_frame_6').on('load', function () {
        var contents = jQuery(this).contents().find('*').html();
        var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;
        if (!is_postback) {
            return;
        }
        var form_content = jQuery(this).contents().find('#gform_wrapper_6');
        var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_6').length > 0;
        var is_redirect = contents.indexOf('gformRedirect(){') >= 0;
        var is_form = form_content.length > 0 && !is_redirect && !is_confirmation;
        var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;
        if (is_form) {
            jQuery('#gform_wrapper_6').html(form_content.html());
            if (form_content.hasClass('gform_validation_error')) {
                jQuery('#gform_wrapper_6').addClass('gform_validation_error');
            } else {
                jQuery('#gform_wrapper_6').removeClass('gform_validation_error');
            }
            setTimeout(function () {
                /* delay the scroll by 50 milliseconds to fix a bug in chrome */
                jQuery(document).scrollTop(jQuery('#gform_wrapper_6').offset().top - mt);
            }, 50);
            if (window['gformInitDatepicker']) {
                gformInitDatepicker();
            }
            if (window['gformInitPriceFields']) {
                gformInitPriceFields();
            }
            var current_page = jQuery('#gform_source_page_number_6').val();
            gformInitSpinner(6, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
            jQuery(document).trigger('gform_page_loaded', [6, current_page]);
            window['gf_submitting_6'] = false;
        } else if (!is_redirect) {
            var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').html();
            if (!confirmation_content) {
                confirmation_content = contents;
            }
            jQuery('#gform_wrapper_6').replaceWith(confirmation_content);
            jQuery(document).scrollTop(jQuery('#gf_6').offset().top - mt);
            jQuery(document).trigger('gform_confirmation_loaded', [6]);
            window['gf_submitting_6'] = false;
            wp.a11y.speak(jQuery('#gform_confirmation_message_6').text());
        } else {
            jQuery('#gform_6').append(contents);
            if (window['gformRedirect']) {
                gformRedirect();
            }
        }
        jQuery(document).trigger("gform_pre_post_render", [{
            formId: "6",
            currentPage: "current_page",
            abort: function () {
                this.preventDefault();
            }
        }]);
        if (event && event.defaultPrevented) {
            return;
        }
        const gformWrapperDiv = document.getElementById("gform_wrapper_6");
        if (gformWrapperDiv) {
            const visibilitySpan = document.createElement("span");
            visibilitySpan.id = "gform_visibility_test_6";
            gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
        }
        const visibilityTestDiv = document.getElementById("gform_visibility_test_6");
        let postRenderFired = false;
        function triggerPostRender() {
            if (postRenderFired) {
                return;
            }
            postRenderFired = true;
            jQuery(document).trigger('gform_post_render', [6, current_page]);
            gform.utils.trigger({
                event: 'gform/postRender',
                native: false,
                data: {
                    formId: 6,
                    currentPage: current_page
                }
            });
            gform.utils.trigger({
                event: 'gform/post_render',
                native: false,
                data: {
                    formId: 6,
                    currentPage: current_page
                }
            });
            if (visibilityTestDiv) {
                visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
            }
        }
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this
                    , args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate)
                        func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow)
                    func.apply(context, args);
            }
                ;
        }
        const debouncedTriggerPostRender = debounce(function () {
            triggerPostRender();
        }, 200);
        if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                        debouncedTriggerPostRender();
                        observer.disconnect();
                    }
                }
                );
            }
            );
            observer.observe(document.body, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeFilter: ['style', 'class'],
            });
        } else {
            triggerPostRender();
        }
    });
});
/* ]]&gt; */


document.addEventListener('gform_post_render', function () {
    let disabled = document.querySelectorAll('.gf_readonly');
    disabled.forEach((element) => {
        element.querySelector('input').setAttribute('disabled', 'disabled');
    }
    );
    let mandatory = document.querySelectorAll('.mandatory');
    mandatory.forEach((element) => {
        element.querySelector('input[type=radio]').setAttribute('onclick', 'return false;');
    }
    );
});


document.getElementById("ak_js_3").setAttribute("value", (new Date()).getTime());


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    gformInitSpinner(7, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
    jQuery('#gform_ajax_frame_7').on('load', function () {
        var contents = jQuery(this).contents().find('*').html();
        var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;
        if (!is_postback) {
            return;
        }
        var form_content = jQuery(this).contents().find('#gform_wrapper_7');
        var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_7').length > 0;
        var is_redirect = contents.indexOf('gformRedirect(){') >= 0;
        var is_form = form_content.length > 0 && !is_redirect && !is_confirmation;
        var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;
        if (is_form) {
            jQuery('#gform_wrapper_7').html(form_content.html());
            if (form_content.hasClass('gform_validation_error')) {
                jQuery('#gform_wrapper_7').addClass('gform_validation_error');
            } else {
                jQuery('#gform_wrapper_7').removeClass('gform_validation_error');
            }
            setTimeout(function () {
                /* delay the scroll by 50 milliseconds to fix a bug in chrome */
                jQuery(document).scrollTop(jQuery('#gform_wrapper_7').offset().top - mt);
            }, 50);
            if (window['gformInitDatepicker']) {
                gformInitDatepicker();
            }
            if (window['gformInitPriceFields']) {
                gformInitPriceFields();
            }
            var current_page = jQuery('#gform_source_page_number_7').val();
            gformInitSpinner(7, 'https://www.digitalsilk.com/wp-content/plugins/gravityforms/images/spinner.svg', true);
            jQuery(document).trigger('gform_page_loaded', [7, current_page]);
            window['gf_submitting_7'] = false;
        } else if (!is_redirect) {
            var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').html();
            if (!confirmation_content) {
                confirmation_content = contents;
            }
            jQuery('#gform_wrapper_7').replaceWith(confirmation_content);
            jQuery(document).scrollTop(jQuery('#gf_7').offset().top - mt);
            jQuery(document).trigger('gform_confirmation_loaded', [7]);
            window['gf_submitting_7'] = false;
            wp.a11y.speak(jQuery('#gform_confirmation_message_7').text());
        } else {
            jQuery('#gform_7').append(contents);
            if (window['gformRedirect']) {
                gformRedirect();
            }
        }
        jQuery(document).trigger("gform_pre_post_render", [{
            formId: "7",
            currentPage: "current_page",
            abort: function () {
                this.preventDefault();
            }
        }]);
        if (event && event.defaultPrevented) {
            return;
        }
        const gformWrapperDiv = document.getElementById("gform_wrapper_7");
        if (gformWrapperDiv) {
            const visibilitySpan = document.createElement("span");
            visibilitySpan.id = "gform_visibility_test_7";
            gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
        }
        const visibilityTestDiv = document.getElementById("gform_visibility_test_7");
        let postRenderFired = false;
        function triggerPostRender() {
            if (postRenderFired) {
                return;
            }
            postRenderFired = true;
            jQuery(document).trigger('gform_post_render', [7, current_page]);
            gform.utils.trigger({
                event: 'gform/postRender',
                native: false,
                data: {
                    formId: 7,
                    currentPage: current_page
                }
            });
            gform.utils.trigger({
                event: 'gform/post_render',
                native: false,
                data: {
                    formId: 7,
                    currentPage: current_page
                }
            });
            if (visibilityTestDiv) {
                visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
            }
        }
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this
                    , args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate)
                        func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow)
                    func.apply(context, args);
            }
                ;
        }
        const debouncedTriggerPostRender = debounce(function () {
            triggerPostRender();
        }, 200);
        if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                        debouncedTriggerPostRender();
                        observer.disconnect();
                    }
                }
                );
            }
            );
            observer.observe(document.body, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeFilter: ['style', 'class'],
            });
        } else {
            triggerPostRender();
        }
    });
});
/* ]]&gt; */


{
    "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "DigitalSilk WebDesign",
                "address": {
                    "@type": "PostalAddress",
                    "postalCode": "10011",
                    "addressRegion": "NY",
                    "addressCountry": "US",
                    "streetAddress": "18 West 18th Street",
                    "addressLocality": "New York City"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "telephone": "+18002069413",
                    "areaServed": [
                        "US",
                        "NY"
                    ]
                },
                "image": {
                    "@type": "ImageObject",
                    "name": "DigitalSilk Web Design in New York image",
                    "author": "Gabriel Shaoolian",
                    "contentLocation": "New York City, NY",
                    "description": "Web Design agency based in NYC",
                    "url": "https://www.digitalsilk.com/wp-content/uploads/2023/01/New-York-web-design-company-featured-work.png.webp"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Gabriel Shaoolian",
                    "jobTitle": "CEO & Founder",
                    "gender": "Male",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+18002069413",
                        "url": "https://www.digitalsilk.com/contact/"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "postalCode": "10011",
                        "addressRegion": "NY",
                        "addressCountry": "US",
                        "streetAddress": "18 West 18th Street",
                        "addressLocality": "New York City"
                    }
                },
                "additionalType": [
                    "https://en.wikipedia.org/wiki/New_York_City",
                    "https://en.wikipedia.org/wiki/Web_design",
                    "https://en.wikipedia.org/wiki/User_experience_design",
                    "https://en.wikipedia.org/wiki/User_interface_design",
                    "https://en.wikipedia.org/wiki/Responsive_web_design",
                    "https://en.wikipedia.org/wiki/Adaptive_web_design",
                    "https://en.wikipedia.org/wiki/Tableless_web_design"
                ],
                "mainEntityOfPage": "https://www.digitalsilk.com/web-design/new-york/",
                "knowsAbout": [
                    "User Experience Design",
                    "User Interface Design",
                    "Responsive Web Design",
                    "Adaptive Web Design",
                    "Tableless Web Design",
                    "Accessibility Design",
                    "Mobile-first Design",
                    "Graphic Design for Web",
                    "Web Typography",
                    "User-centered Design",
                    "Interaction Design",
                    "CSS Grid Layout",
                    "Flexbox Design",
                    "Web Usability",
                    "E-commerce Design"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": 4.8,
                    "bestRating": 5,
                    "worstRating": 1,
                    "ratingCount": 114
                }
            },
            {
                "@type": "Service",
                "name": "Web Design",
                "description": "Full-Service Web Design Agency - From startups to Fortune 500 companies, we create custom solutions that grow brands online. As a full-service web design agency, we handle all of your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement. At Digital Silk, we’re not just another agency. We drive measurable results for every client. Our senior-level team takes ownership of every project, operates with complete transparency and offers expert recommendations and guidance every step of the way.",
                "provider": {
                    "@type": "Organization",
                    "@id": "https://www.digitalsilk.com/#organization",
                    "name": "Digital Silk",
                    "legalName": "Digital Silk, Inc.",
                    "url": "https://www.digitalsilk.com/",
                    "logo": {
                        "@type": "ImageObject",
                        "@id": "https://www.digitalsilk.com/#/schema/logo/image/",
                        "url": "https://www.digitalsilk.com/wp-content/uploads/2022/12/digitalsilk.com_social-share.jpg",
                        "width": 1200,
                        "height": 600,
                        "caption": "Web Design Agency | Digital Silk"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/digitalsilk/",
                        "https://www.instagram.com/digital_silk/",
                        "https://www.facebook.com/DigitalSilkAgency/",
                        "https://www.youtube.com/channel/UCFGpPCxYE3HbNKZwxxnuWDA"
                    ],
                    "founder": {
                        "@type": "Person",
                        "name": "Gabriel Shaoolian",
                        "jobTitle": "CEO & Founder",
                        "alternateName": "Gabriel Shaoolian",
                        "familyName": "Shaoolian"
                    }
                }
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Digital Silk Web Design Agency",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "114"
                }
            }
        ]
}

(function (d, s, i, r) {
    if (d.getElementById(i)) {
        return;
    }
    var n = d.createElement(s)
        , e = d.getElementsByTagName(s)[0];
    n.id = i;
    n.src = '//js.hs-analytics.net/analytics/' + (Math.ceil(new Date() / r) * r) + '/6458328.js';
    e.parentNode.insertBefore(n, e);
}
)(document, "script", "hs-analytics", 300000);



/* <![CDATA[ */
var leadin_wordpress = {
    "userRole": "visitor",
    "pageType": "home",
    "leadinPluginVersion": "11.1.73"
};
var leadin_wordpress = {
    "userRole": "visitor",
    "pageType": "home",
    "leadinPluginVersion": "11.1.73"
};
/* ]]> */



/* <![CDATA[ */
var klUser = {
    "current_user_email": "",
    "commenter_email": ""
};
/* ]]> */






/* <![CDATA[ */
wp.i18n.setLocaleData({
    'text direction\u0004ltr': ['ltr']
});
/* ]]> */






/* <![CDATA[ */
var dsAjax = {
    "admin_url": "https:\/\/www.digitalsilk.com\/wp-admin\/admin-ajax.php",
    "page_id": "8",
    "category_id": null,
    "tag_id": null,
    "base_url": "https:\/\/www.digitalsilk.com",
    "s": null,
    "sc": null,
    "home_popup": "5",
    "thank_you_heading": "Thank You!",
    "thank_you_text": "A download link has been sent to your inbox. ",
    "is_front_page": "1",
    "whitepaper_form": "9",
    "client_ip": "49.205.177.197",
    "is_single": ""
};
/* ]]> */








/* <![CDATA[ */
var gform_theme_config = {
    "common": {
        "form": {
            "honeypot": {
                "version_hash": "63bb36052b4fe155b9bc5c3c69d75e3b"
            },
            "ajax": {
                "ajaxurl": "https:\/\/www.digitalsilk.com\/wp-admin\/admin-ajax.php",
                "ajax_submission_nonce": "51dfe5cfd9",
                "i18n": {
                    "step_announcement": "Step %1$s of %2$s, %3$s",
                    "unknown_error": "There was an unknown error processing your request. Please try again."
                }
            }
        }
    },
    "hmr_dev": "",
    "public_path": "https:\/\/www.digitalsilk.com\/wp-content\/plugins\/gravityforms\/assets\/js\/dist\/",
    "config_nonce": "899c6f8db3"
};
/* ]]> */





/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).on('gform_post_render', function (event, formId, currentPage) {
        if (formId == 9) {
            if (typeof Placeholders != 'undefined') {
                Placeholders.enable();
            }
        }
    });
    jQuery(document).on('gform_post_conditional_logic', function (event, formId, fields, isInit) { })
});
/* ]]> */


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).trigger("gform_pre_post_render", [{
        formId: "9",
        currentPage: "1",
        abort: function () {
            this.preventDefault();
        }
    }]);
    if (event && event.defaultPrevented) {
        return;
    }
    const gformWrapperDiv = document.getElementById("gform_wrapper_9");
    if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_9";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
    }
    const visibilityTestDiv = document.getElementById("gform_visibility_test_9");
    let postRenderFired = false;
    function triggerPostRender() {
        if (postRenderFired) {
            return;
        }
        postRenderFired = true;
        jQuery(document).trigger('gform_post_render', [9, 1]);
        gform.utils.trigger({
            event: 'gform/postRender',
            native: false,
            data: {
                formId: 9,
                currentPage: 1
            }
        });
        gform.utils.trigger({
            event: 'gform/post_render',
            native: false,
            data: {
                formId: 9,
                currentPage: 1
            }
        });
        if (visibilityTestDiv) {
            visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
    }
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this
                , args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        }
            ;
    }
    const debouncedTriggerPostRender = debounce(function () {
        triggerPostRender();
    }, 200);
    if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                    debouncedTriggerPostRender();
                    observer.disconnect();
                }
            }
            );
        }
        );
        observer.observe(document.body, {
            attributes: true,
            childList: false,
            subtree: true,
            attributeFilter: ['style', 'class'],
        });
    } else {
        triggerPostRender();
    }
});
/* ]]> */


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).on('gform_post_render', function (event, formId, currentPage) {
        if (formId == 6) {
            if (typeof Placeholders != 'undefined') {
                Placeholders.enable();
            }
        }
    });
    jQuery(document).on('gform_post_conditional_logic', function (event, formId, fields, isInit) { })
});
/* ]]> */


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).trigger("gform_pre_post_render", [{
        formId: "6",
        currentPage: "1",
        abort: function () {
            this.preventDefault();
        }
    }]);
    if (event && event.defaultPrevented) {
        return;
    }
    const gformWrapperDiv = document.getElementById("gform_wrapper_6");
    if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_6";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
    }
    const visibilityTestDiv = document.getElementById("gform_visibility_test_6");
    let postRenderFired = false;
    function triggerPostRender() {
        if (postRenderFired) {
            return;
        }
        postRenderFired = true;
        jQuery(document).trigger('gform_post_render', [6, 1]);
        gform.utils.trigger({
            event: 'gform/postRender',
            native: false,
            data: {
                formId: 6,
                currentPage: 1
            }
        });
        gform.utils.trigger({
            event: 'gform/post_render',
            native: false,
            data: {
                formId: 6,
                currentPage: 1
            }
        });
        if (visibilityTestDiv) {
            visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
    }
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this
                , args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        }
            ;
    }
    const debouncedTriggerPostRender = debounce(function () {
        triggerPostRender();
    }, 200);
    if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                    debouncedTriggerPostRender();
                    observer.disconnect();
                }
            }
            );
        }
        );
        observer.observe(document.body, {
            attributes: true,
            childList: false,
            subtree: true,
            attributeFilter: ['style', 'class'],
        });
    } else {
        triggerPostRender();
    }
});
/* ]]> */


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).on('gform_post_render', function (event, formId, currentPage) {
        if (formId == 7) {
            if (typeof Placeholders != 'undefined') {
                Placeholders.enable();
            }
        }
    });
    jQuery(document).on('gform_post_conditional_logic', function (event, formId, fields, isInit) { })
});
/* ]]> */


/* <![CDATA[ */
gform.initializeOnLoaded(function () {
    jQuery(document).trigger("gform_pre_post_render", [{
        formId: "7",
        currentPage: "1",
        abort: function () {
            this.preventDefault();
        }
    }]);
    if (event && event.defaultPrevented) {
        return;
    }
    const gformWrapperDiv = document.getElementById("gform_wrapper_7");
    if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_7";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
    }
    const visibilityTestDiv = document.getElementById("gform_visibility_test_7");
    let postRenderFired = false;
    function triggerPostRender() {
        if (postRenderFired) {
            return;
        }
        postRenderFired = true;
        jQuery(document).trigger('gform_post_render', [7, 1]);
        gform.utils.trigger({
            event: 'gform/postRender',
            native: false,
            data: {
                formId: 7,
                currentPage: 1
            }
        });
        gform.utils.trigger({
            event: 'gform/post_render',
            native: false,
            data: {
                formId: 7,
                currentPage: 1
            }
        });
        if (visibilityTestDiv) {
            visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
    }
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this
                , args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        }
            ;
    }
    const debouncedTriggerPostRender = debounce(function () {
        triggerPostRender();
    }, 200);
    if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                    debouncedTriggerPostRender();
                    observer.disconnect();
                }
            }
            );
        }
        );
        observer.observe(document.body, {
            attributes: true,
            childList: false,
            subtree: true,
            attributeFilter: ['style', 'class'],
        });
    } else {
        triggerPostRender();
    }
});
/* ]]> */


var wto = wto || [];
wto.push(['setWTID', 'wt-a6eb1414-b072-4f3a-ae8d-7f001656e5c3']);
wto.push(['webTraxs']);
(function () {
    var wt = document.createElement('script');
    wt.src = document.location.protocol + '//www.webtraxs.com/wt.php';
    wt.type = 'text/javascript';
    wt.async = true;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wt, s);
}
)();
