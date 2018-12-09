FROM wordpress:php7.1-fpm-alpine

COPY wordpress/plugins/ /home/plugins
COPY wordpress/themes/ /home/themes
COPY wordpress/wp-config.php /home

COPY wordpress/docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["php-fpm"]
