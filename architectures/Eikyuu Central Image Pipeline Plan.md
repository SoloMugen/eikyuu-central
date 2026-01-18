# **Image Pipeline Implementation Specification**

## **1\. Environment Configuration**

* **Provider:** Fal.ai (via HTTPS API)  
* **Key Storage:** .env.local as FAL\_KEY  
* **Vision Model:** Gemini 2.5 Flash (for Option B processing)

## **2\. Logic Routing by Category & Priority**

### **A. The "Copyright Shield" (Option B)**

**Categories:** Gaming, Twitch, Anime, Entertainment, Lifestyle

1. **Input:** Source Image URL  
2. **Process:** Send image to Gemini 2.5 Flash to generate a "Generic technical description of the style, lighting, and composition."  
3. **Generation:** \* **High Priority (Carousel):** Send Gemini's text to fal-ai/flux-pro.  
   * **Normal Priority (Collage):** Send Gemini's text to fal-ai/flux/schnell.

### **B. The "Direct Blueprint" (Option A)**

**Categories:** Science, Geo-Politics, Business

1. **Input:** Source Image URL  
2. **Process:** Direct Image-to-Image request.  
3. **Generation:**  
   * **High Priority (Carousel):** fal-ai/flux-pro/image-to-image (Strength: 0.5).  
   * **Normal Priority (Collage):** fal-ai/flux/schnell/image-to-image (Strength: 0.5).

## **3\. Cost Control Parameters**

* **Resolution:** \* Carousel: 1024x768 (or 16:9 equivalent)  
  * Collage: 768x768 (Square)  
* **Safety Net:** If a flux-pro request fails or hits a rate limit, the system must automatically downgrade the request to flux/schnell to ensure the article still gets an image.

## **4\. Automation Instructions for IDE**

"Using the above logic, create a robust Python service called ImageIntelligence. It should take image\_url, category, and priority as arguments and return a processed\_image\_url. Use the requests library for Fal.ai calls and the google-generativeai SDK for Gemini Vision processing."