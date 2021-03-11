
> Open this page at [https://mintgenie.github.io/drive-by-compass-try/](https://mintgenie.github.io/drive-by-compass-try/)
 

![image](https://user-images.githubusercontent.com/66748747/110723615-9e328580-8214-11eb-8e94-2296814e6245.png)

Here is the OrientBit - used to change the orientation of MicroBit on certain Robots so that the built-in Compass can be used.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/mintgenie/drive-by-compass-try** and import

## Edit this project ![Build status badge](https://github.com/mintgenie/drive-by-compass-try/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/mintgenie/drive-by-compass-try** and click import

The Course_correct block is used for driving in the direction of a particular heading angle.
This heading angle has to be passed as parameter to "preferred_heading".
The Course_correct block returns an array of speeds for the left motor and right motor.
Assign the value of array[0] to left motor and value of array[1] to right motor.

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/mintgenie/drive-by-compass-try/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
