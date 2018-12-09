<?php
namespace IA_CDN_LOADER;

class CdnRewrite {

    private $cdnUrl = '';
    private $siteUrl = '';
    private $cdnVersionKey = '';

    public function __construct( $cdnUrl, $siteUrl, $cdnVersionKey, $cdnVersionMonth ) {
        $this->siteUrl = $siteUrl;
        $this->cdnUrl = $cdnUrl;
        $this->cdnVersionKey = $cdnVersionKey;
        $this->cdnVersionMonth = $cdnVersionMonth;
    }

    public function add_filters() {
        add_filter('plugins_url', array($this, 'fixCdnUrl'), 10, 3);
        add_filter('bloginfo', array($this, 'fixCdnUrl'), 10, 3);
        add_filter('stylesheet_directory_uri', array($this, 'fixCdnUrl'), 10, 3);
        add_filter('template_directory_uri', array($this, 'fixCdnUrl'), 10, 3);
        add_filter('script_loader_src', array($this, 'fixCdnUrl'), 10, 3);
        add_filter('style_loader_src', array($this, 'fixCdnUrl'), 10, 3);
        return true;
    }

    public function fixCdnUrl( $url ) {
        $url = str_replace( $this->siteUrl, $this->cdnUrl . '/assets/' . $this->cdnVersionMonth . '/'. $this->cdnVersionKey, $url );
        return $url;
    }
}
