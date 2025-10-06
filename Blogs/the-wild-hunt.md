---
title: the wild hunt.
date: 2025-10-06
---

so from the past few days i have been switching through custom roms.
i used to have crdroid on my device but its been few months since i have got any security patch for the device, so i moved back to the stock of the mobile provider.
well Ofcourse its a poco phone so its on hyperos.
i flashed it... the end...

after few days i have seen this [github repo](https://github.com/peridot-dev/android_device_xiaomi_peridot) its the device tree of the mobile i am using, i was like
![wow](https://media.tenor.com/h3dU1jihA54AAAAi/woah-po.gif)

even tho i am a react native dev, and I am into custom roms but i never wanted to know how roms usually work, but after reviewing this repo i changed my mind. i stated digging deep into android ecosystem basically hyperos ecosystem.

by luck i didnt delete the rom file.
its a tgz file so as we extract it we got this
![base folder](https://i.postimg.cc/NjXm6k6f/image.png)
so we usually use flash_all.sh or bat file to flash the os on to the mobile
here comes the fun part as i cd into images folder
![images folder](https://i.postimg.cc/NM8wmSMd/image.png)

![mind blown](https://media1.tenor.com/m/3eIvVsG3yPYAAAAd/the-universe-tim-and-eric-mind-blown.gif)


as i fuzzy find the folder i got my hands on to this file:
![init_boot.img](https://i.postimg.cc/wjrBx13b/image.png)
So apparently, to root our device, we patch this file using Magisk or KSU and then reflash the init_boot. img to gain root access.
well thats a different topic we can discuss later in a different blog...


so this super file super.img is what we need to extract stuff from i guess...
![super.img](https://i.postimg.cc/h4NMmr6B/image.png)

so we can use lpunpack to extract the img i thought 
and i use the command to unpack the img in to the folder and i got this error
![error](https://i.postimg.cc/MHw7sPSB/image.png)

i dont even know what that means, so i had to google it again
![ok](https://media1.tenor.com/m/tEEjB0RnxyAAAAAC/puppet-awkward.gif)
English is not my first language and this is the first time i saw that error, but a single google search fixed the issue by first unsparing the image.

After a bit more research. I got to know that starting from Android 7, the OS introduced seamless updates using A/B partitions.

This means the system now has two sets of key partitions — slot A and slot B — which help in performing OTA (Over-The-Air) updates more reliably.

When the phone boots up, it runs from the active slot (for example, slot_a). When an update is received, the system installs it in the inactive slot (slot_b) in the background. Once the update is complete, the device reboots into the updated slot.

If everything works fine, the updated slot becomes the new active slot. If something goes wrong during boot, the device can fall back to the previous working slot.

This process repeats with each update, alternating between the two slots, until the device reaches its end of life (EOL) and stops receiving further update.

so used the simg2img to unsparse it and we got lot of work to do with it.
![super raw img](https://i.postimg.cc/hGh005RL/image.png)

so we extract it 
![extracted super raw image](https://i.postimg.cc/kGV33cSX/image.png)

so yeah each of them are split into a/b partitions. most likely our stuff we to need work will be in A partitions.

we need to mount up each img to a mount point to see whats inside the img. we aint gonna access to the code directly but, we can reverse engineer the blobs ig, idk i have never done this in the past this is my first time doing this kind of stuff..

 these are the extracted files from super_raw.img looks like
![raw files](https://i.postimg.cc/BbChzPYx/image.png)

We can mount them up directly to a mount point to view what's inside the `. img` most probably there will be a lot of gibberish we need for reverse engineer 

![mounted everything](https://i.postimg.cc/tJYR5d0f/image.png)

so with this all the A partitions are connected we need to explore them to find the required things, this is really hard idk how the custom rom devs managing to extract all the blobs reverse engineering them to device trees and building roms, this shit is really hard...

after a lil exploring i came up with this

| Partition       | Path                 | Contents                                                               |
| --------------- | -------------------- | ---------------------------------------------------------------------- |
| `system_a`      | `mnt/system_a/`      | Android framework, system apps, core binaries                          |
| `product_a`     | `mnt/product_a/`     | OEM & Google apps, overlays, region configs                            |
| `vendor_a`      | `mnt/vendor_a/`      | Proprietary blobs (camera, GPU, audio, modem), vendor daemons          |
| `odm_a`         | `mnt/odm_a/`         | Device-specific HALs or carrier/custom configs                         |
| `system_ext_a`  | `mnt/system_ext_a/`  | Additional frameworks and privileged services                          |
| `system_dlkm_a` | `mnt/system_dlkm_a/` | Kernel-loadable modules (.ko files)                                    |
| `vendor_dlkm_a` | `mnt/vendor_dlkm_a/` | Vendor-specific kernel modules                                         |
| `mi_ext_a`      | `mnt/mi_ext_a/`      | MIUI-specific system overlays and extensions (common in Xiaomi builds) |

i guess this will take months/ years of work to complete this reverse engineering side/ssiiddee hustle i am trying to complete. this is not even a hustle just some shit that wont even work...

hope we meet again
![ok bye](https://media1.tenor.com/m/d-1mV4lldnkAAAAd/simpsons-homer-simpson.gif)
