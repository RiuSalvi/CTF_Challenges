FROM ubuntu:20.04
RUN LANGUAGE=en_US
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Shanghai
RUN apt-get update
RUN apt-get install -y zip
RUN apt-get install -y php
RUN apt-get install -y php-curl php-common php-cli php-mbstring php-xml php-zip
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# Create a laravel project
RUN composer create-project --prefer-dist laravel/laravel /laravel "8.4.2"

WORKDIR /laravel

# Lock the ignition version
RUN composer require --dev facade/ignition==2.5.1

CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "9000"]