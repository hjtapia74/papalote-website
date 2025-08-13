# Media Files Setup Guide

## 📹 Hero Background Video Setup

To implement the professional video background like the original Webflow site, you need to add these files:

### **Required Video Files:**
```
public/assets/videos/
├── hero-background.mp4    # Primary video (H.264, broad compatibility)
└── hero-background.webm   # Modern format (better compression)
```

### **Required Image File:**
```
public/assets/images/
└── hero-mobile-fallback.png   # Mobile background image
```

## 🎯 **Why This Setup?**

### **Video Format Strategy:**
- **WebM:** Listed first - modern browsers use this (smaller file size, better quality)
- **MP4:** Fallback for Safari/iOS and older browsers
- **Browser automatically picks** the best supported format

### **Mobile Performance:**
- **Desktop/Tablet:** Video background (engaging, modern)
- **Mobile:** Static image (faster loading, saves battery/data)
- **Fallback:** Gradient background if nothing loads

### **File Recommendations:**

#### **For Videos:**
- **Duration:** 10-30 seconds (will loop automatically)
- **Resolution:** 1920x1080 minimum (4K preferred for retina displays)
- **Compression:** 
  - MP4: H.264 codec, medium compression
  - WebM: VP9 codec, high compression
- **Size:** Keep under 5MB each for good performance

#### **For Mobile Image:**
- **Format:** PNG (better quality, supports transparency)
- **Resolution:** 1920x1080 minimum
- **Size:** Keep under 1MB (PNG files are larger than JPG)
- **Content:** Representative frame from your video

## 🚀 **How to Create These Files:**

### **Option 1: From Existing Video**
```bash
# Create WebM from MP4 (using ffmpeg)
ffmpeg -i hero-background.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus hero-background.webm

# Extract image frame for mobile
ffmpeg -i hero-background.mp4 -ss 00:00:05 -vframes 1 hero-mobile-fallback.png
```

### **Option 2: Online Converters**
- **CloudConvert.com** - Convert MP4 to WebM
- **TinyJPG.com** - Compress images
- **Handbrake** - Video compression tool

## 📱 **Current Behavior:**
- **Desktop/Tablet:** Shows gradient background (until you add videos)
- **Mobile:** Shows gradient background (until you add mobile image)
- **All Devices:** Content is fully functional and responsive

## 🔧 **Testing:**
1. Add your video files to `public/assets/videos/`
2. Add your mobile image to `public/assets/images/`
3. Refresh the development server
4. Test on different screen sizes using browser dev tools

The implementation now matches professional standards with progressive enhancement!