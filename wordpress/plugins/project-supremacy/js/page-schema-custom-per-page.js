var schemaID = 200;
var counter = 200;

var schemas = {
    "Person": {
        "@context": "http://schema.org/",
        "@type": "Person",
        "givenName": {
            "name": "First Name",
            "type": "text",
            "placeholder": "eg. John"
        },
        "familyName": {
            "name": "Last Name",
            "type": "text",
            "placeholder": "eg. Smith"
        },
        "gender": {
            "name": "Gender",
            "type": "text",
            "placeholder": "eg. Male"
        },
        "birthDate": {
            "name": "Birth Date",
            "type": "text",
            "placeholder": "eg. 12-31-2016"
        },
        "jobTitle": {
            "name": "Job Title",
            "type": "text",
            "placeholder": "eg. CEO"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "contactPoint": {
            "name": "Contact Information",
            "type": "fields",
            "fields": {
                "@type": "ContactPoint",
                "contactType": {
                    "name": "Contact Type",
                    "type": "text",
                    "placeholder": "eg. customer support"
                },
                "email": {
                    "name": "E-Mail",
                    "type": "email",
                    "placeholder": "eg. example@email.com"
                },
                "telephone": {
                    "name": "Phone Number",
                    "type": "text",
                    "placeholder": "eg. 1-800-5000"
                },
                "faxNumber": {
                    "name": "Fax Number",
                    "type": "text",
                    "placeholder": "eg. 1-800-5000"
                }
            }
        },
        "owns": {
            "name": "Owner of Product",
            "type": "fields",
            "fields": {
                "@type": "Product",
                "aggregateRating": {
                    "name": "Rating",
                    "type": "fields",
                    "fields": {
                        "@type": "AggregateRating",
                        "ratingValue": {
                            "name": "Rating Value",
                            "type": "text",
                            "placeholder": "eg. 5"
                        },
                        "ratingCount": {
                            "name": "Rating Count",
                            "type": "text",
                            "placeholder": "eg. 200"
                        }
                    }
                },
                "name": {
                    "name": "Name",
                    "type": "text",
                    "placeholder": "eg. My Product"
                },
                "description": {
                    "name": "Description",
                    "type": "textarea",
                    "placeholder": "eg. Describe what your product is about"
                },
                "image": {
                    "name": "Image",
                    "type": "text",
                    "placeholder": "eg. http://website.com/image.jpg"
                },
                "offers": {
                    "name": "Pricing",
                    "type": "fields",
                    "fields": {
                        "@type": "Offer",
                        "price": {
                            "name": "Price",
                            "type": "text",
                            "placeholder": "eg. 55.00"
                        },
                        "priceCurrency": {
                            "name": "Currency",
                            "type": "text",
                            "placeholder": "eg. USD"
                        }
                    }
                },
                "manufacturer": {
                    "name": "Manufacturer",
                    "type": "fields",
                    "fields": {
                        "@type": "Organization",
                        "name": {
                            "name": "Name",
                            "type": "text",
                            "placeholder": "eg. Organization"
                        }
                    }
                },
                "model": {
                    "name": "Model",
                    "type": "text",
                    "placeholder": "eg. ZXR750"
                }
            }
        },
        "worksFor": {
            "name": "Works for Organization",
            "type": "fields",
            "fields": {
                "@type": "Organization",
                "name": {
                    "name": "Name",
                    "type": "text",
                    "placeholder": "eg. Organization"
                }
            }
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe this Person"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        }
    },
    "Product": {
        "@context": "http://schema.org/",
        "@type": "Product",
        "additionalType": {
            "name": "Additional Type",
            "type": "text-with-help",
            "placeholder": "eg. http://www.productontology.org/id/Hammer",
            "help": "You can use this ontology to describe any object for which a matching entry in the English Wikipedia exists. If you already know the correct URI for the English Wikipedia page, simply cut off the Wikipedia namespace part<br><br><code>http://en.wikipedia.org/wiki/</code><br><br>from the Wikipedia URI, e.g.<br><br><code>http://en.wikipedia.org/wiki/Hammer</code><br><br>and replace it by<br><br><code>http://www.productontology.org/id/</code><br><br>which will e.g. give you<br><br><code>http://www.productontology.org/id/Hammer</code>"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Product"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your product is about"
        },
        "image": {
            "name": "Image",
            "type": "text",
            "placeholder": "eg. http://website.com/image.jpg"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "offers": {
            "name": "Pricing",
            "type": "fields",
            "fields": {
                "@type": "Offer",
                "price": {
                    "name": "Price",
                    "type": "text",
                    "placeholder": "eg. 55.00"
                },
                "priceCurrency": {
                    "name": "Currency",
                    "type": "text",
                    "placeholder": "eg. USD"
                }
            }
        },
        "manufacturer": {
            "name": "Manufacturer",
            "type": "fields",
            "fields": {
                "@type": "Organization",
                "name": {
                    "name": "Name",
                    "type": "text",
                    "placeholder": "eg. Organization"
                }
            }
        },
        "model": {
            "name": "Model",
            "type": "text",
            "placeholder": "eg. ZXR750"
        }
    },
    "VideoObject": {
        "@context": "http://schema.org/",
        "@type": "VideoObject",
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Video"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your video is about"
        },
        "thumbnailUrl": {
            "name": "Thumbnail URL",
            "type": "text",
            "placeholder": "eg. thumbnail.jpg"
        },
        "contentURL": {
            "name": "Video URL",
            "type": "text",
            "placeholder": "eg. http://www.example.com/video123.flv"
        },
        "embedURL": {
            "name": "Video Player URL",
            "type": "text",
            "placeholder": "eg. http://www.example.com/videoplayer.swf?video=123"
        },
        "uploadDate": {
            "name": "Upload Date",
            "type": "date",
            "placeholder": "eg. Date when video was uploaded"
        },
        "expires": {
            "name": "Expiring Date",
            "type": "date",
            "placeholder": "eg. Expiring date of a video"
        },
        "height": {
            "name": "Height",
            "type": "text",
            "placeholder": "eg. Height of a video"
        },
        "width": {
            "name": "Width",
            "type": "text",
            "placeholder": "eg. Width of a video"
        }
    },
    "Review": {
        "@context": "http://schema.org",
        "@type": "Review",
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "reviewBody": {
            "name": "Review Body",
            "type": "textarea",
            "placeholder": "eg. Describe the item being reviewed"
        },
        "author": {
            "name": "Author",
            "type": "fields",
            "fields": {
                "@type": "Person",
                "name": {
                    "name": "Name",
                    "type": "text",
                    "placeholder": "eg. John Smith"
                }
            }
        },
        "itemReviewed": {
            "name": "Reviewed Item",
            "type": "fields",
            "fields": {
                "@type": "Thing",
                "name": {
                    "name": "Name",
                    "type": "text",
                    "placeholder": "eg. Some Product"
                }
            }
        },
        "datePublished": {
            "name": "Date Published",
            "type": "date",
            "placeholder": "eg. 01/19/2016"
        },
        "reviewRating": {
            "name": "Review Rating",
            "type": "fields",
            "fields": {
                "@type": "Rating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 4.5"
                },
                "worstRating": {
                    "name": "Rating scale minimum",
                    "type": "text",
                    "placeholder": "eg. 1"
                },
                "bestRating": {
                    "name": "Rating scale maximum",
                    "type": "text",
                    "placeholder": "eg. 5"
                }
            }
        }
    },
    "LocalBusiness": {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AccountingService": {
        "@context": "http://schema.org",
        "@type": "AccountingService",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Attorney": {
        "@context": "http://schema.org",
        "@type": "Attorney",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoBodyShop": {
        "@context": "http://schema.org",
        "@type": "AutoBodyShop",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoDealer": {
        "@context": "http://schema.org",
        "@type": "AutoDealer",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoPartsStore": {
        "@context": "http://schema.org",
        "@type": "AutoPartsStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoRental": {
        "@context": "http://schema.org",
        "@type": "AutoRental",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoRepair": {
        "@context": "http://schema.org",
        "@type": "AutoRepair",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "AutoWash": {
        "@context": "http://schema.org",
        "@type": "AutoWash",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Bakery": {
        "@context": "http://schema.org",
        "@type": "Bakery",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "BarOrPub": {
        "@context": "http://schema.org",
        "@type": "BarOrPub",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "BeautySalon": {
        "@context": "http://schema.org",
        "@type": "BeautySalon",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "BedAndBreakfast": {
        "@context": "http://schema.org",
        "@type": "BedAndBreakfast",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "BikeStore": {
        "@context": "http://schema.org",
        "@type": "BikeStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "BookStore": {
        "@context": "http://schema.org",
        "@type": "BookStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "CafeOrCoffeeShop": {
        "@context": "http://schema.org",
        "@type": "CafeOrCoffeeShop",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ChildCare": {
        "@context": "http://schema.org",
        "@type": "ChildCare",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ClothingStore": {
        "@context": "http://schema.org",
        "@type": "ClothingStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ComputerStore": {
        "@context": "http://schema.org",
        "@type": "ComputerStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "DaySpa": {
        "@context": "http://schema.org",
        "@type": "DaySpa",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Dentist": {
        "@context": "http://schema.org",
        "@type": "Dentist",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "DryCleaningOrLaundry": {
        "@context": "http://schema.org",
        "@type": "DryCleaningOrLaundry",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Electrician": {
        "@context": "http://schema.org",
        "@type": "Electrician",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ElectronicsStore": {
        "@context": "http://schema.org",
        "@type": "ElectronicsStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "EmergencyService": {
        "@context": "http://schema.org",
        "@type": "EmergencyService",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "EntertainmentBusiness": {
        "@context": "http://schema.org",
        "@type": "EntertainmentBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "EventVenue": {
        "@context": "http://schema.org",
        "@type": "EventVenue",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ExerciseGym": {
        "@context": "http://schema.org",
        "@type": "ExerciseGym",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "FinancialService": {
        "@context": "http://schema.org",
        "@type": "FinancialService",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Florist": {
        "@context": "http://schema.org",
        "@type": "Florist",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "FoodEstablishment": {
        "@context": "http://schema.org",
        "@type": "FoodEstablishment",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "FurnitureStore": {
        "@context": "http://schema.org",
        "@type": "FurnitureStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "GardenStore": {
        "@context": "http://schema.org",
        "@type": "GardenStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "GeneralContractor": {
        "@context": "http://schema.org",
        "@type": "GeneralContractor",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "GolfCourse": {
        "@context": "http://schema.org",
        "@type": "GolfCourse",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HVACBusiness": {
        "@context": "http://schema.org",
        "@type": "HVACBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HairSalon": {
        "@context": "http://schema.org",
        "@type": "HairSalon",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HardwareStore": {
        "@context": "http://schema.org",
        "@type": "HardwareStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HealthAndBeautyBusiness": {
        "@context": "http://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HobbyShop": {
        "@context": "http://schema.org",
        "@type": "HobbyShop",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HobbyShop or Store": {
        "@context": "http://schema.org",
        "@type": "HobbyShop or Store",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HomeAndConstructionBusiness": {
        "@context": "http://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HomeGoodsStore": {
        "@context": "http://schema.org",
        "@type": "HomeGoodsStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Hospital": {
        "@context": "http://schema.org",
        "@type": "Hospital",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Hotel": {
        "@context": "http://schema.org",
        "@type": "Hotel",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "HousePainter": {
        "@context": "http://schema.org",
        "@type": "HousePainter",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "InsuranceAgency": {
        "@context": "http://schema.org",
        "@type": "InsuranceAgency",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "JewelryStore": {
        "@context": "http://schema.org",
        "@type": "JewelryStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "LiquorStore": {
        "@context": "http://schema.org",
        "@type": "LiquorStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Locksmith": {
        "@context": "http://schema.org",
        "@type": "Locksmith",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "LodgingBusiness": {
        "@context": "http://schema.org",
        "@type": "LodgingBusiness",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MedicalClinic": {
        "@context": "http://schema.org",
        "@type": "MedicalClinic",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MensClothingStore": {
        "@context": "http://schema.org",
        "@type": "MensClothingStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MobilePhoneStore": {
        "@context": "http://schema.org",
        "@type": "MobilePhoneStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Motel": {
        "@context": "http://schema.org",
        "@type": "Motel",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MotorcycleDealer": {
        "@context": "http://schema.org",
        "@type": "MotorcycleDealer",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MotorcycleRepair": {
        "@context": "http://schema.org",
        "@type": "MotorcycleRepair",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MovingCompany": {
        "@context": "http://schema.org",
        "@type": "MovingCompany",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "MusicStore": {
        "@context": "http://schema.org",
        "@type": "MusicStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "NailSalon": {
        "@context": "http://schema.org",
        "@type": "NailSalon",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "NightClub": {
        "@context": "http://schema.org",
        "@type": "NightClub",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Notary": {
        "@context": "http://schema.org",
        "@type": "Notary",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "OfficeEquipmentStore": {
        "@context": "http://schema.org",
        "@type": "OfficeEquipmentStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Optician": {
        "@context": "http://schema.org",
        "@type": "Optician",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "PetStore": {
        "@context": "http://schema.org",
        "@type": "PetStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Physician": {
        "@context": "http://schema.org",
        "@type": "Physician",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Plumber": {
        "@context": "http://schema.org",
        "@type": "Plumber",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ProfessionalService": {
        "@context": "http://schema.org",
        "@type": "ProfessionalService",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "RVPark": {
        "@context": "http://schema.org",
        "@type": "RVPark",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "RealEstateAgent": {
        "@context": "http://schema.org",
        "@type": "RealEstateAgent",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Residence": {
        "@context": "http://schema.org",
        "@type": "Residence",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Restaurant": {
        "@context": "http://schema.org",
        "@type": "Restaurant",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "RoofingContractor": {
        "@context": "http://schema.org",
        "@type": "RoofingContractor",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "School": {
        "@context": "http://schema.org",
        "@type": "School",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "SelfStorage": {
        "@context": "http://schema.org",
        "@type": "SelfStorage",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ShoeStore": {
        "@context": "http://schema.org",
        "@type": "ShoeStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "SkiResort": {
        "@context": "http://schema.org",
        "@type": "SkiResort",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "SportingGoodsStore": {
        "@context": "http://schema.org",
        "@type": "SportingGoodsStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "SportsClub": {
        "@context": "http://schema.org",
        "@type": "SportsClub",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Store": {
        "@context": "http://schema.org",
        "@type": "Store",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "TattooParlor": {
        "@context": "http://schema.org",
        "@type": "TattooParlor",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Taxi": {
        "@context": "http://schema.org",
        "@type": "Taxi",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "TennisComplex": {
        "@context": "http://schema.org",
        "@type": "TennisComplex",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "TireShop": {
        "@context": "http://schema.org",
        "@type": "TireShop",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "ToyStore": {
        "@context": "http://schema.org",
        "@type": "ToyStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "TravelAgency": {
        "@context": "http://schema.org",
        "@type": "TravelAgency",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "VeterinaryCare": {
        "@context": "http://schema.org",
        "@type": "VeterinaryCare",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "WholesaleStore": {
        "@context": "http://schema.org",
        "@type": "WholesaleStore",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    },
    "Winery": {
        "@context": "http://schema.org",
        "@type": "Winery",
        "url": {
            "name": "Website",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com"
        },
        "name": {
            "name": "Name",
            "type": "text",
            "placeholder": "eg. My Business"
        },
        "description": {
            "name": "Description",
            "type": "textarea",
            "placeholder": "eg. Describe what your business is about"
        },
        "logo": {
            "name": "Logo",
            "type": "text",
            "placeholder": "eg. http://yourwebsite.com/logo.png"
        },
        "hasMap": {
            "name": "Map URL",
            "type": "text",
            "placeholder": "eg. https://www.google.com/maps/@44.013852,20.9133851,15z?hl=en"
        },
        "email": {
            "name": "E-Mail",
            "type": "email",
            "placeholder": "eg. example@email.com"
        },
        "telephone": {
            "name": "Telephone",
            "type": "text",
            "placeholder": "eg. +1 800 5000"
        },
        "sameAs": {
            "name": "Social Links",
            "type": "array",
            "subType": "social",
            "placeholder": "eg. http://www.facebook.com/mypage"
        },
        "aggregateRating": {
            "name": "Rating",
            "type": "fields",
            "fields": {
                "@type": "AggregateRating",
                "ratingValue": {
                    "name": "Rating Value",
                    "type": "text",
                    "placeholder": "eg. 5"
                },
                "ratingCount": {
                    "name": "Rating Count",
                    "type": "text",
                    "placeholder": "eg. 200"
                }
            }
        },
        "openingHours": {
            "name": "Opening Hours",
            "type": "array",
            "placeholder": "eg. Mo-Sa 11:00-14:30"
        },
        "address": {
            "name": "Address",
            "type": "fields",
            "fields": {
                "@type": "PostalAddress",
                "addressLocality": {
                    "name": "City",
                    "type": "text",
                    "placeholder": "eg. Phoenix"
                },
                "addressRegion": {
                    "name": "Region/State",
                    "type": "text",
                    "placeholder": "eg. AL"
                },
                "postalCode": {
                    "name": "Postal Code/Zip",
                    "type": "text",
                    "placeholder": "eg. WA425D"
                },
                "streetAddress": {
                    "name": "Street",
                    "type": "text",
                    "placeholder": "eg. Some Street 43D"
                }
            }
        },
        "geo": {
            "name": "GEO Location",
            "type": "fields",
            "fields": {
                "@type": "GeoCoordinates",
                "latitude": {
                    "name": "Latitude",
                    "type": "text",
                    "placeholder": "eg. 11.4295"
                },
                "longitude": {
                    "name": "Longitude",
                    "type": "text",
                    "placeholder": "eg. -482.49284"
                },
                "map": {
                    "name": "Map",
                    "type": "map"
                }
            }
        }
    }
};

(function ($) {

    $(document).ready(function($){

        $(document).on('click', '#schema-validator', function(){
            var url = $(this).attr('data-url');
            schemaValidation(url);
        });

        /**
         *  Add Custom Fields
         */

        $(document).on('click', '.btn-add-fields', function(){
            $(this).hide();
            var type = $(this).attr('data-type');
            var box = $(this).next();
            var select = box.find('select');
            select.empty();
            select.html(findFields(type));
            box.show();
        });

        $(document).on('click', '.btn-cancel-add-field', function(){
            var parent = $(this).parents('.add-fields');
            var previous = parent.prev();
            parent.hide();
            previous.show();
        });

        $(document).on('click', '.btn-add-field', function(){
            var parent = $(this).parents('.add-fields');
            var previous = parent.prev();
            parent.hide();
            previous.show();

            var select = parent.find('select');
            var schemaType = previous.attr('data-type');
            var fieldType = select.val();

            var parentSelector = $(this).parents('.schema-box').find('.schema-title').next().attr('name').replace('@context', 'x');

            $(renderSingleSchema(schemas[schemaType], fieldType, parentSelector)).insertBefore(previous);

            initMap();
            $( ".datepicker" ).datepicker();
        });

        function renderSingleSchema(schema, key, parent) {
            var html = '';
            counter++;
            if (schema.hasOwnProperty(key)) {
                var id = key + '-' + counter;
                html += '<div class="form-group">';
                html += '<label for="' + id + '"><button class="btn btn-xs btn-remove-group"><i class="fa fa-trash-o"></i></button>' + schema[key].name + ':</label>';

                if (schema[key].type == 'array') {
                    if (schema[key].hasOwnProperty('subType')) {
                        if (schema[key]['subType'] == 'social') {
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Facebook Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Twitter Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Google+ Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Instagram Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="YouTube Channel URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="LinkedIn Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                        }
                    } else {
                        html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="' + schema[key].placeholder + '"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                    }

                    html += '<hr><button type="button" class="btn btn-xs btn-success btn-new-array"><i class="fa fa-plus"></i> Add More</button>';
                }

                if (schema[key].type == 'text') {
                    html += '<input type="text" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                }

                if (schema[key].type == 'email') {
                    html += '<input type="email" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                }

                if (schema[key].type == 'textarea') {
                    html += '<textarea id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" rows="3" placeholder="' + schema[key].placeholder + '"></textarea>';
                }

                if (schema[key].type == 'date') {
                    html += '<input type="text" id="' + id + '" class="form-control datepicker" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                }

                if (schema[key].type == 'map') {
                    html += '<hr><button type="button" data-id="' + counter + '" class="populate-map btn btn-xs btn-primary"><i class="fa fa-map-marker"></i> Populate Location from Address</button><hr><div class="google-map" id="' + id + '"></div>';
                }

                if (schema[key].type == 'fields') {
                    html += renderSchema(schema[key].fields, parent.replace('[x]', '[' + key + '][x]'));
                }

                html += '</div>';
            }
            return html;
        }

        function findFields(type) {
            var schema = schemas[type];
            var html = [];
            for (var key in schema) {
                if (typeof schema[key] === 'object') {
                    html.push(
                        '<option value="'+key+'">'+schema[key].name+'</option>'
                    );
                }
            }
            return html.join("\n");
        }

        /**
         *  Add Custom Fields
         */

        $(document).on('click', '.populate-map', function(){
            initMap(true);
        });

        loadSchemasPerPage($('#post_ID').val());

        $(document).on('click', '.btn-trash', function(){
            $(this).parents('.schema-box').remove();
        });

        $(document).on('click', '.remove-form-control-array', function(){
            $(this).parents('.form-control-array-group').remove();
        });

        $('.btn-new-schema').click(function(){
            $('.new-schema').fadeOut('fast', function(){
                $('.new-schema-dialog').fadeIn();
            });
        });

        $('.btn-cancel-schema').click(function(){
            $('.new-schema-dialog').fadeOut('fast', function(){
                $('.new-schema').fadeIn();
            });
        });

        $('.btn-save-schema').click(function(){
            var data = [{
                name: "action",
                value: "gkty_save_default_schemas"
            }];
            $('.schema-body .schema-box').each(function(){
                data = data.concat($(this).serializeArray());
            });

            data.push({
                name: "ID",
                value: $(this).attr('data-id')
            });

            $.post(ajaxurl, data).done(function(d){
                alert('Successfully saved Schema Settings!');
            });
        });

        $(document).on('click', '.btn-new-array', function(){
            var group = $(this).prev().prev().clone();
            group.find('input').val('');
            group.insertAfter($(this).prev().prev());
        });

        $(document).on('click', '.btn-remove-group', function(){
            $(this).parents('.form-group').eq(0).remove();
        });

        $(document).on('click', '.btn-minimize', function(){
            if ($(this).hasClass('down')) {
                 $(this).removeClass('down').addClass('up');
                 $(this).find('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
                 $(this).parents('.schema-box').removeClass('down');
            } else {
                $(this).removeClass('up').addClass('down');
                $(this).find('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
                $(this).parents('.schema-box').addClass('down');
            }
        });

        $('.btn-create-schema').click(function(){
            $('.new-schema-dialog').fadeOut('fast', function(){
                $('.new-schema').fadeIn();
            });
            var schema = $('#schema_type').val();
            var schemaName = $('#schema_type').find('option:selected').text();
            if (typeof schemas[schema] != 'undefined') {
                schemaID++;
                var html = renderSchema(schemas[schema], 'schema[si-' + schemaID + '][x]');
                $('.schema-body').prepend(renderSchemaBox(schemaName,html, '<input type="hidden" name="ID" value="'+ $('#post_ID').val() +'">'));
                initMap();
                $( ".datepicker" ).datepicker();
            }
        });

    });

    function renderSchemaBox(type, html, id) {
        var schema_type = (id == '') ? ' <span class="schema-type">(Default Schema)</span> ' : ' <span class="schema-type">(Per Page Schema)</span> ';
        var schema_type_class = (id == '') ? '' : 'schema-perpage';
        return '<form class="schema-box down ' + schema_type_class + '">' + id +
            '<h3 class="schema-title">' +
            '<button class="btn btn-xs btn-minimize down" type="button"><i class="fa fa-angle-double-down"></i></button> ' + type + schema_type + ' <button type="button" class="btn btn-xs btn-danger btn-trash"><i class="fa fa-trash-o"></i></button>' +
            '</h3>' +
            '' + html + '' +
            '<button type="button" class="btn btn-xs btn-success btn-add-fields" data-type="'+type.split(' ').join("")+'"><i class="fa fa-plus"></i> Add more fields</button>' +
            '<div class="add-fields" style="display: none">' +
            '<select class="fields-to-add"></select> ' +
            '<button type="button" class="btn btn-xs btn-danger btn-cancel-add-field"><i class="fa fa-trash-o"></i> Cancel</button> ' +
            '<button type="button" class="btn btn-xs btn-primary btn-add-field"><i class="fa fa-plus"></i> Insert</button>' +
            '</div>' +
            '</form>';
    }

    function loadSchemasPerPage(ID) {
        $.get(ajaxurl, 'action=gkty_load_schemas&ID=' + ID).done(function(d){
            if (d == 'ERROR') return;
            for (var key in d) {
                var schemaData = d[key];
                var schemaName = $('#schema_type').find('option[value="' + schemaData['@type'] + '"]').text();
                schemaID++;
                var html = renderSchemaWithValues(schemaData, 'schema[' + key + '][x]', '');
                $('.schema-body').prepend(renderSchemaBox(schemaName,html, '<input type="hidden" name="ID" value="'+ ID +'">'));
                initMap();
                $( "#datepicker" ).datepicker();
            }
        });
    }

    function renderSchemaWithValues(schema, parent, originalSchema) {
        var html = '';
        if (originalSchema == '') {
            originalSchema = schemas[schema['@type']];
        }
        for (var key in originalSchema) {
            counter++;
            if (schema.hasOwnProperty(key) || key == 'map') {

                // StripSlashes
                try {
                    schema[key] = schema[key].replace(/\\(.)/mg, "$1");
                } catch (tempError) {
                    console.log("[PS] Cannot remove slashes");
                }

                if (contains('@', key)) {
                    html += '<input type="hidden" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'"/>';
                } else {
                    var id = key + '-' + counter;
                    html += '<div class="form-group">';
                    html += '<label for="' + id + '"><button class="btn btn-xs btn-remove-group"><i class="fa fa-trash-o"></i></button>' + originalSchema[key].name + ':</label>';

                    if (originalSchema[key].type == 'array') {
                        if (schema[key].length > 0) {
                            for(var i = 0; i < schema[key].length; i++) {
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="' + schema[key][i] + '" placeholder="' + originalSchema[key].placeholder + '"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            }
                        } else {
                            if (originalSchema[key].hasOwnProperty('subType')) {
                                if (originalSchema[key]['subType'] == 'social') {
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Facebook Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Twitter Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Google+ Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Instagram Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="YouTube Channel URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                    html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="LinkedIn Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                }
                            } else {
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="' + originalSchema[key].placeholder + '"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            }
                        }
                        html += '<button type="button" class="btn btn-xs btn-success btn-new-array"><i class="fa fa-plus"></i> Add More</button>';
                    }

                    if (originalSchema[key].type == 'text') {
                        html += '<input type="text" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'" placeholder="' + originalSchema[key].placeholder + '"/>';
                    }

                    if (originalSchema[key].type == 'text-with-help') {
                        html += '<input type="text" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'" placeholder="' + originalSchema[key].placeholder + '"/>' + "<div class='schema-field-help'>"+originalSchema[key].help+"</div>";;
                    }


                    if (originalSchema[key].type == 'email') {
                        html += '<input type="email" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'" placeholder="' + originalSchema[key].placeholder + '"/>';
                    }

                    if (originalSchema[key].type == 'textarea') {
                        html += '<textarea id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" rows="3" placeholder="' + originalSchema[key].placeholder + '">'+schema[key]+'</textarea>';
                    }


                    if (originalSchema[key].type == 'date') {
                        html += '<input type="text" id="' + id + '" class="form-control datepicker" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'" placeholder="' + originalSchema[key].placeholder + '"/>';
                    }

                    if (originalSchema[key].type == 'map') {
                        html += '<hr><button type="button" data-id="' + counter + '" class="populate-map btn btn-xs btn-primary"><i class="fa fa-map-marker"></i> Populate Location from Address</button><hr><div class="google-map" id="' + id + '"></div>';
                    }

                    if (originalSchema[key].type == 'fields') {
                        html += renderSchemaWithValues(schema[key], parent.replace('[x]', '[' + key + '][x]'), originalSchema[key].fields);
                    }

                    html += '</div>';
                }
            }
        }
        return html;
    }

    function renderSchema(schema, parent) {
        var html = '';
        for (var key in schema) {
            counter++;
            if (schema.hasOwnProperty(key)) {
                if (contains('@', key)) {
                    html += '<input type="hidden" name="' + parent.replace('[x]', '[' + key + ']') + '" value="'+schema[key]+'"/>';
                } else {
                    var id = key + '-' + counter;
                    html += '<div class="form-group">';
                    html += '<label for="' + id + '"><button class="btn btn-xs btn-remove-group"><i class="fa fa-trash-o"></i></button>' + schema[key].name + ':</label>';

                    if (schema[key].type == 'array') {
                        if (schema[key].hasOwnProperty('subType')) {
                            if (schema[key]['subType'] == 'social') {
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Facebook Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Twitter Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Google+ Page URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="Instagram Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="YouTube Channel URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                                html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="LinkedIn Profile URL"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                            }
                        } else {
                            html += '<div class="form-control-array-group"><input type="text" id="' + id + '" class="form-control form-control-array" name="' + parent.replace('[x]', '[' + key + '][]') + '" value="" placeholder="' + schema[key].placeholder + '"/><button type="button" class="remove-form-control-array"><i class="fa fa-trash-o"></i></button></div>';
                        }

                        html += '<button type="button" class="btn btn-xs btn-success btn-new-array"><i class="fa fa-plus"></i> Add More</button>';
                    }

                    if (schema[key].type == 'text') {
                        html += '<input type="text" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                    }

                    if (schema[key].type == 'text-with-help') {
                        html += '<input type="text" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>' + "<div class='schema-field-help'>"+schema[key].help+"</div>";
                    }

                    if (schema[key].type == 'email') {
                        html += '<input type="email" id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                    }

                    if (schema[key].type == 'textarea') {
                        html += '<textarea id="' + id + '" class="form-control" name="' + parent.replace('[x]', '[' + key + ']') + '" rows="3" placeholder="' + schema[key].placeholder + '"></textarea>';
                    }

                    if (schema[key].type == 'date') {
                        html += '<input type="text" id="' + id + '" class="form-control datepicker" name="' + parent.replace('[x]', '[' + key + ']') + '" value="" placeholder="' + schema[key].placeholder + '"/>';
                    }

                    if (schema[key].type == 'map') {
                        html += '<hr><button type="button" data-id="' + counter + '" class="populate-map btn btn-xs btn-primary"><i class="fa fa-map-marker"></i> Populate Location from Address</button><hr><div class="google-map" id="' + id + '"></div>';
                    }

                    if (schema[key].type == 'fields') {
                        html += renderSchema(schema[key].fields, parent.replace('[x]', '[' + key + '][x]'));
                    }

                    html += '</div>';
                }
            }
        }
        return html;
    }

    function contains(what, where) {
        return where.indexOf(what) > -1;
    }

    function initMap(forceAddress) {
        $('.google-map').each(function(){
            if (1 == 1) {
                var lat,lon,map,geocoder;

                var address = [];

                // Address Vars
                var City = $(this).parents('.schema-box').find("input[id*='addressLocality']");
                var State = $(this).parents('.schema-box').find("input[id*='addressRegion']");
                var Zip = $(this).parents('.schema-box').find("input[id*='postalCode']");
                var Street = $(this).parents('.schema-box').find("input[id*='streetAddress']");

                if (City.length) {
                    if (City.val() != '') address.push(City.val());
                }

                if (State.length) {
                    if (State.val() != '') address.push(State.val());
                }

                if (Zip.length) {
                    if (Zip.val() != '') address.push(Zip.val());
                }

                if (Street.length) {
                    if (Street.val() != '') address.push(Street.val());
                }

                lat = 37.09024;
                lon = -95.712891;

                var lat_v =  $(this).parents('.schema-box').find("input[id*='latitude']");
                var lon_v =  $(this).parents('.schema-box').find("input[id*='longitude']");

                var useAddress = true;

                if (lat_v.length && lon_v.length) {
                    if (lat_v.val() != '' && lon_v.val() != '') {
                        lon = lon_v.val();
                        lat = lat_v.val();
                        useAddress = false;
                    }
                }

                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lon);
                var myOptions = {
                    zoom: 8,
                    center: latlng,
                    mapTypeControl: true,
                    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                    navigationControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var setCords = false;

                var setting = { "location": latlng } ;

                if (useAddress || typeof forceAddress != 'undefined') {
                    if (address.length > 0) {
                        address = address.join(',');
                        setting = {"address": address};
                        setCords = true;
                    }
                }

                map = new google.maps.Map($(this)[0], myOptions);
                if (geocoder) {
                    geocoder.geocode( setting , function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

                                map.setCenter(results[0].geometry.location);

                                var infowindow = new google.maps.InfoWindow(
                                    { content: "<b>"+address+"</b>",
                                        size: new google.maps.Size(150,50)
                                    });

                                var marker = new google.maps.Marker({
                                    position: results[0].geometry.location,
                                    map: map,
                                    title:'Your Location'
                                });

                                if (setCords) {
                                    lat_v.val(results[0].geometry.location.lat());
                                    lon_v.val(results[0].geometry.location.lng());
                                }

                                google.maps.event.addListener(map, "click", function(event) {

                                    if (marker) {
                                        marker.setMap(null);
                                        marker = null;
                                    }

                                    var myLatLng = event.latLng ;

                                    marker = new google.maps.Marker({
                                        position: myLatLng,
                                        map: map,
                                        title:"Property Location"
                                    });

                                    // populate the form fields with lat & lng
                                    lat_v.val(event.latLng.lat());
                                    lon_v.val(event.latLng.lng());

                                });

                            } else {
                                alert("No results found");
                            }
                        } else {
                            console.log("Geocode was not successful for the following reason: " + status);
                        }
                    });
                }
            }
        });
    }

    function schemaValidation(w) {

        var v = $('.validation-result');
        var p = $('.pre-output');

        if (w == '') return;

        v.css('color','black');
        v.html(' - <i class="fa fa-refresh fa-spin"></i> Working...');

        $.post('/wp-admin/admin-post.php', 'website=' + w + '&action=gkty_schema_validation', function(d){
            if (d.status == 'ERROR') {
                v.css('color','red');
                v.html(' - <i class="fa fa-close"></i> Website does not have any Schema Markups present!');
                p.html('N/A');
            } else {
                var json = d.data;
                json = JSON.stringify(json, null, 4);
                v.css('color','green');
                v.html(' - <i class="fa fa-check"></i> Valid Schema Markup(s) Detected!');
                p.html(json);
            }

        }, 'json');
    }


})(jQuery);