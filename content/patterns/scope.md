+++
date = "2018-01-02T17:11:55Z"
title = "Scope"
+++

## Introduction

This document sets out the scope for the testing and evaluation of the **Bulb** websites. For efficient reporting, not every page and component is included in the scope. However, samples are chosen such that each important design pattern is covered.

In the report, issues are divided into **General** and **Components** categories. General issues may include problems with — for example — document structure, or absence of focus styles. **Components** issues organize advice by isolated component, such as a tab interface or dialog window. The scope simply defines the URLs at which issues may be found.

{{% note %}}
Color contrast issues are considered out of scope since there is an effort underway already to bring the color palette under WCAG compliance.
{{% /note %}}

## The marketing site

### 1. Home page

URL
: [https://bulb.co.uk](https://bulb.co.uk)

Included
:  
  * Header and navigation
  * Content structure
  * "Get a Quote" form
  * Graphics
  * Charts
  * Footer

![Landing page navigation](/images/landing_navigation.png)

![Landing page 3 steps section](/images/landing_123.png)

![Landing page comparison chart](/images/landing_chart.png)

![Landing page footer](/images/landing_footer.png)

### 2. About → Our energy

URL
: [https://bulb.co.uk/energy](https://bulb.co.uk/energy)

Included
:  
  * Page structure
  * Providers chart

![Renewable energy providers chart](/images/our_energy_chart.png)

### 3. About → Careers

URL
: [https://bulb.co.uk/careers](https://bulb.co.uk/careers)

Included
:  
  * Page structure
  * Imagery
  * Open roles collapsible sections

![Open roles section](/images/open_roles.png)

### 4. About → Business

URL
: [https://bulb.co.uk/business](https://bulb.co.uk/business)

Included
:  
  * Page structure
  * Imagery
  * Pence per kWh table
  * "Get a Quote" form and error mechanism

![Business page chart](/images/business_chart.png)

![Business page table](/images/business_table.png)

![Business page form](/images/business_form.png)

## The join site

### 1. Welcome page

URL
: [https://join.bulb.co.uk/join/quote](https://join.bulb.co.uk/join/quote)

Included
:  
  * The logo/header
  * Main heading
  * The "Get My Quote" form and error mechanism
  * The three captioned graphics

![Screenshot of the welcome page](/images/join1.png)

### 2. Questions

URL
: Starts from [https://join.bulb.co.uk/join/questions/my-energy](https://join.bulb.co.uk/join/questions/my-energy)

Included
:  
  * Each question page's heading
  * Each question page's form functionality
  * Continue buttons
  * Back links

![First join question](/images/joinquestion1.png)

![Second join question](/images/joinquestion2.png)

![Third join question](/images/joinquestion3.png)

### 3. "Switch Now" page

URL
:  
[https://join.bulb.co.uk/join/quote-result](https://join.bulb.co.uk/join/quote-result)

Included
:  
  * Heading structure
  * Timeline navigation (small screens only)
  * Buttons and links
  * "Annual Cost For A Typical Home" chart

![Switch page timeline (labeled dots along a line)](/images/switch_timeline.png)

![Switch page bar chart](/images/switch_chart.png)

### 4. My information page

URL
:  
[https://join.bulb.co.uk/join/quick-signup](https://join.bulb.co.uk/join/quick-signup)

Included
:  
  * Heading structure
  * Form and form error mechanism
  * "Show/hide password" mechanism
  * Right sidebar

![My information form](/images/joinform.png)

![My information sidebar](/images/joinsidebar.png)

### 5. My payment details page

URL
:  
[https://join.bulb.co.uk/join/quick-signup](https://join.bulb.co.uk/join/quick-signup) (note that this is the same URL as the **4. My information page** URL)

Included
:  
  * Heading structure
  * Form and form error mechanism
  * Right sidebar
  * Terms & conditions dialog window

![My payment details form](/images/my_payment_details.png)

![My payment details sidebar](/images/payment_sidebar.png)

![Terms and conditions dialog](/images/terms.png)

## The account dashboard

### 1. Login page

URL
:  
[https://my.bulb.co.uk/login/password](https://my.bulb.co.uk/login/password)

Included
:  
  * Page structure
  * Just the password login feature (email link not possible)
  * Form and form error mechanism

![Login form](/images/login.png)

### 2. Dashboard

URL
:  
[https://my.staging.bulb.co.uk/dashboard](https://my.staging.bulb.co.uk/dashboard)

Included
:  
  * Page structure
  * Dashboard option grid
  * Header/navigation

![Dashboard page](/images/account_landing.png)

### 3. My usage

URL
:  
[https://my.staging.bulb.co.uk/dashboard/usage](https://my.staging.bulb.co.uk/dashboard/usage)

Included
:  
  * Heading structure
  * Usage chart
  * Usage table

![Usage chart](/images/usage_chart.png)

![Usage chart](/images/usage_table.png)

### 4. Statements and payments

URL
:  
[https://my.staging.bulb.co.uk/dashboard/statements](https://my.staging.bulb.co.uk/dashboard/statements)

Included
:  
  * Heading structure
  * Payments table

![Payments table](/images/payments_table.png)

### 5. Tariff info

URL
:  
[https://my.staging.bulb.co.uk/dashboard/personal-details](https://my.staging.bulb.co.uk/dashboard/personal-details)

Included
:  
  * Page structure
  * Personal info form and error mechanism

![Personal info form](/images/personal_info.png)

![Tariff info definition lists](/images/personal_list.png)

### 6. Submit an electricity meter reading

URL
:  
[https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity)

Included
:  
  * Page structure
  * Previous reading
  * New reading form and error mechanism

![Submit an electricity reading page](/images/reading.png)
