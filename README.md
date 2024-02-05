# E-learning Platform

https://sanni1244.github.io/elearning/

Complete project files will be posted in future repo
This is simply a frontend view.


# OBJECTIVES OF THE SOFTWARE
This software is an e-learning platform that was created to allow students gain easy access to materials. It is designed mainly for students of Lagos State University. It contains several materials and past questions to all the courses and it also contains quizzes for every course.

# SYSTEM REQUIREMENT
<pre>
	Operating System: Windows, Mac or Linux operating system
	Minimum CPU speed: 1GHz
	Minimum System Memory: 2GB RAM
</pre>

# Installation and Setup Process
<pre>
<b>Step 1</b>: Download XAMPP or any open-source web server stack package. 
	XAMPP comes with Apache HTTP which serves as an HTTP server, Interpreters for scripts written in PHP which was used 
	in this project and MySQL module which will be used for the database creation.
	
XAMPP download link - https://www.apachefriends.org/download.html
	It comes with different versions along with PHP.
XAMPP version 8.1.5 with PHP 8.1.0 for windows was used in the development of the project.

	It can be installed on Windows, Linux and OS X (Mac Os X)
 	
Minimum requirements
		Windows Server 2008 and later
		Windows Vista and later
		Mac OS X 10.6 and later
		CentOS, Ubuntu, Fedora, Gentoo, Arch, SUSE
		
Available in x32 and x64 bits for Windows and x64 bits for Linux and MacOS.
Download the version suitable for your system. The system used for the development of this project had Windows Server 2008 
which met the requirements and was a x64 bit machine.

<b>Step 2: Setting Up XAMPP</b>
Once you have downloaded the XAMPP setup file, run as administrator. 
Follow the installation process as provided by the developers.
Once installation is completed, open the XAMPP control panel. 
Click on the start action for Apache and MySQL. 
Ensure that port numbers are visible and the background colour for both Apache and MySQL module change colour to light green. 
		
If it doesn't change colour
•	try restarting your system.
•	Troubleshoot any error that appears.
•	Use the help button to discover possible causes. 
		
You should also check to see that PHP was well installed
Click on the shell button on the XAMPP control panel. Once the shell application opens up, type 'php -v' and tap the enter button. 
If the version of PHP installed appears, then installation was successful. If an error pops up, it means there was a problem with installation 
and it will have to be re-installed.

<b>Step 3:  Creating the database</b>
•	Open 'This PC' and go to C:/xampp/htdocs and paste the ‘elearning’ folder here. If you installed Xampp in a different path directory, 
	it is advised to re-install in the default path as some features might not work.
•	Click on the Admin button for MySQL on the XAMPP control panel, 
•	This should open up a page on your browser.
•	Click on Database.
•	In the field that says Database name, type learning and click create.
	
<b>Step 4: Import the table</b>
•	Click on the created database (learning).
•	Click on Import. 
•	Click choose file, locate the ‘learning.sql' file in the database folder and select it, leave everything as it is and click Go. 
	Once this is all done, the new tables will be accessible in the database.

<b>Step 5: Connecting to the database from your browser</b>

Once all above steps have been completed, open a new tab in your browser and type http://localhost/elearning/index.html in the search bar.
This brings you to the landing page of the web site. In this page, you can login or click Get Started to sign up.

<b>Step 6: Logging In</b>
Logging in is possible with user’s E-mail and password.
Password must be 4 digits or more and password and email must be for the same account.

Email Address: admin@gmail.com
Password: admin

Click the submit button. If the values were entered correctly, it redirects the page to the user’s dashboard.

<b>Step 7: Registration</b>
In the sign-up page, new users can register here. They will be required to input their first name, last name, email and password. 
There is also an option for students where students can input their matric number as well as their level, department and faculty.	



<b>Step 8: After logging in</b>
	Once the user logs in, several actions can be performed. They can enrol for a course, check the list of all available courses. 
	They can also search for a course, download and read materials as well as edit their details and log out.
	
<b>Step 9: Admin</b>
	The admin is a special user account, they have the privilege of removing users, adding courses and materials, as well as removing them.

</pre>
