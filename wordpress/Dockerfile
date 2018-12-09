FROM wordpress:php7.1-fpm-alpine

COPY plugins/ /home/plugins
COPY themes/ /home/themes
COPY wp-config.php /home

COPY docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["php-fpm"]
