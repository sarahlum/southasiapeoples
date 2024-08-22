Outline: 

1. Project Brief 
2. Set up
3. Environment Info
4. Codebase summary
5. How to add more?





Project Overview

Joshua Project has been using the website www.southasiapeoples.org to display detailed data about various people groups in South Asia. This website has been a valuable resource, providing insights into the diverse cultures, languages, and religious practices across the region. However, as internet usage has grown, particularly in South Asia, it has become evident that the current website is not optimized for mobile devices, which is a significant drawback considering that a large portion of the traffic comes from users in South Asia.

Recognizing the importance of making this information more accessible and user-friendly, especially for those accessing it on mobile devices, Joshua Project has partnered with Indigitous. As part of this collaboration, a team of interns at Indigitous has been tasked with the crucial responsibility of redesigning and rebuilding the SouthAsiaPeoples.org website. The goal is to create a modern, responsive website that not only meets the needs of mobile users but also offers an improved and engaging experience.

Project Objectives

* Mobile Optimization - Develop a responsive website that functions well on mobile
* Modern redesign - Redesign the website to have a better look and feel and having user friendly navigation
* Better user experience - Fast loading and engaging

Target Audience

* The people of South Asia who access the website to get information about neighboring cultures and their own.



Set up

Windows

* Install Laravel Herd
* Install Git Bash
* Clone the github repository git clone https://github.com/johnli-codaio/south-asia-peoples.git
  * make sure project is in Home\Herd folder
* Install MySQL version 8.0.37 https://dev.mysql.com/downloads/installer/
  * After it installs, click Add and add server
* Use VS PowerShell
* Go to Node website https://nodejs.org/en/download/package-manager
  * in the dropdown on the website, select node v.18.20.3. Should say Windows and FNM in other dropdowns
  * Copy into the VS PowerShell
    * After you run the fnm line, you may need to reboot computer
    * May need to add fnm to PowerShell profile
    * Node may need script execution permissions: https://stackoverflow.com/questions/57673913/vsc-powershell-after-npm-updating-packages-ps1-cannot-be-loaded-because-runnin
    * TLDR; open PowerShell as admin and run Set-ExecutionPolicy RemoteSigned 
* Then, run npm install 
* Then, run composer install 
* Then, run npm run build 
* Then, run cp .env.example .env . This will create a new .env file for your project based on the template. We do not check this in because it has passwords! It should already be in your .gitignore .
* Then, run php artisan migrate . This will initialize your SQL database for this project
* Then, run php artisan key:generate. This will create an Application encryption key for your project.
* Then, run herd open . You should be greeted with the above page

Mac

1. Install Homebrew

If you haven’t already yet, you will need to install homebrew. This is OSX’s sort of “package manager”:

Copy and paste this into your terminal of choice

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"



2. Install MySQL

Once brew has installed, install mysql via

brew install mysql



After that is finished, you can start it by running

brew services start mysql




3. Install NVM and Node

If you haven’t already yet, install NVM (stands for Node Version Manager). We will be using Node to install quite a few packages.



brew install nvm



Once nvm is installed, run the following:

source ~/.nvm/nvm.sh

(I would also recommend adding this in a line in your ~/.zshrc or ~/.bashrc file, whichever one you are using:

* If echo $SHELL shows zsh, add it to ~/.zshrc. Otherwise, add it to ~/.bashrc



Then, run

nvm install 18




This should get you to install node version 18.

3. Install Laravel via Laravel Herd

Follow the instructions here to install herd: https://laravel.com/docs/11.x#herd-on-macos

Note: You DO NOT need to create a new project, we already have one in our github repository.

Once you’ve finished installing herd, restart your terminal. You should have access to laravel and php commands now.



4. Clone the github repository

Our git repository is found at https://github.com/sarahlum/southasiapeoples.git

You should clone it by typing this in your terminal.

git clone https://github.com/sarahlum/southasiapeoples.git



Make sure that you are installing this in your Herd  directory on your home directory ~ . This directory should be created upon installing Herd.

5. Setup your environment

Enter your southasiapeoples directory via cd southasiapeoples 

Then, run npm install 

Then, run composer install 

Then, run npm run build 

Then, run cp .env.example .env . This will create a new .env file for your project based on the template. We do not check this in because it has passwords! It should already be in your .gitignore .

Then, run php artisan migrate . This will initialize your SQL database for this project

Then, run php artisan key:generate. This will create an Application encryption key for your project.

Then, run herd open . You should be greeted with the following page:

Screen Shot 2024-06-25 at 7.02.35 PM.png

Your done!



Code Base Summary:

This is what the files and folders for the code base should look like:

Screenshot 2024-08-19 at 3.28.27 PM.png

Coding languages and databases used include:

* React (.jsx)
* JavaScript (.js)
* Html (.html or .htm)
* Css (.css)
* Laravel (.php)
* MySQL (.sql)

The majority of the code base is in Laravel and React.

How to add more features and pages into the website?

To get started, these three places are the places where you will need to access to add new pages and change existing ones:

File path: resources → js → Pages

Here you will find: the actual react code for each of the pages

File path: app → Http → Controller → Auth

Here you will find: API call for retrieving, sorting/cleaning and displaying data

File path: routes → web.php

Here you will find: the API routes for getting data






<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
