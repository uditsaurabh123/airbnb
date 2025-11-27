---
title: "FixedUpdate vs Update in Unity — The Complete Beginner’s Guide (2025)"
seoTitle: "FixedUpdate vs Update in Unity — The Complete Beginner’s Guide (2025)"
seoDescription: "If you're learning Unity, one of the most confusing topics is the difference between Update() and FixedUpdate().
Both methods run automatically in Unity scr"
datePublished: Thu Nov 27 2025 04:55:28 GMT+0000 (Coordinated Universal Time)
cuid: cmigymxzc000102jva7pabeay
slug: fixedupdate-vs-update-in-unity-the-complete-beginners-guide-2025
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1764219162131/520ca3d4-e230-41dc-a49e-9f3c58b312d1.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1764219258204/61aa1a30-c566-4e51-950a-0ea101ee1858.png
tags: unity-fixedupdate-vs-update, unity-physics-tutorial-what-is-fixedupdate-update-function-unity-explained-unity-beginner-scripting-unity-rigidbody-movement-unity-game-loop-guide

---

If you're learning Unity, one of the **most confusing topics** is the difference between **Update()** and **FixedUpdate()**.  
Both methods run automatically in Unity scripts, but they behave very differently — and using the wrong one can break your movement, physics, or player controls.

In this guide, you’ll learn **exactly what FixedUpdate is**, how it works, how it's different from Update, and when to use each. This article is beginner-friendly, practical, and fully optimized for Unity learners.

---

# 🔧 **What Is FixedUpdate() in Unity?**

`FixedUpdate()` is a special method in Unity that runs at a **fixed time interval** — usually **50 times per second** (every 0.02 seconds).  
Unlike Update, it **does not depend on the frame rate**.

### ✔ FixedUpdate is designed for:

* Rigidbody movement
    
* Physics calculations
    
* Forces (`AddForce`)
    
* Collision-based logic
    
* Stable and consistent gameplay behavior
    

### Why does this matter?

Physics needs **consistent timing**.  
If physics runs at random speeds (like Update does), your game becomes unstable.

---

# ⚡ **What Is Update() in Unity?**

`Update()` runs **every frame**.

If your game runs at 200 FPS → Update runs 200 times/sec.  
If your game runs at 30 FPS → Update runs 30 times/sec.

### ✔ Use Update for:

* Player input
    
* Camera movement
    
* UI changes
    
* Animations (non-physics)
    
* Timers
    

Because Update follows frame rate, it’s perfect for **real-time input**.

---

# 🆚 **FixedUpdate vs Update — What’s the Difference?**

Here’s the simplest comparison:

| Feature | Update() | FixedUpdate() |
| --- | --- | --- |
| Runs based on | Every frame | Fixed interval (0.02 sec) |
| Frame rate dependent? | Yes | No |
| Best for | Input, UI, effects | Physics, Rigidbody |
| Uses | Time.deltaTime | Time.fixedDeltaTime |
| Physics-safe? | ❌ Not recommended | ✅ Yes |

---

# 🎮 **Which One Should You Use? (Beginner Rule)**

### 🟦 Use **Update()** for:

* Reading keyboard / mouse / controller input
    
* Moving cameras
    
* UI and animations
    
* Updating timers and VFX
    

### 🟥 Use **FixedUpdate()** for:

* Moving Rigidbodies
    
* Adding forces
    
* Physics jumps
    
* Collision mechanics
    
* Gravity-based movement
    

If you move a Rigidbody inside Update, your gameplay will behave differently on fast vs slow devices — which is a **huge beginner mistake**.

---

# 🔥 **Example: Wrong vs Right Code**

### ❌ Wrong (Physics inside Update)

```plaintext
void Update()
{
    rb.AddForce(Vector2.right * 10f);
}
```

This will behave differently on each device.

### ✅ Correct (Physics inside FixedUpdate)

```plaintext
void FixedUpdate()
{
    rb.AddForce(Vector2.right * 10f);
}
```

Now the force is consistent.

---

# 🧠 **Why Beginners Get Confused**

Unity names them similarly — but:

* **Update controls game logic.**
    
* **FixedUpdate controls physics.**
    

Once you understand timing, everything makes sense.

---

# 📌 **Pro Tip: Input in Update + Physics in FixedUpdate**

This is the best pattern:

```plaintext
void Update()
{
    inputX = Input.GetAxisRaw("Horizontal");
}

void FixedUpdate()
{
    rb.velocity = new Vector2(inputX * speed, rb.velocity.y);
}
```

✔ Input is read instantly  
✔ Physics moves smoothly  
✔ Works on all devices

---

# 🏁 **Conclusion**

**FixedUpdate()** is your physics engine’s heartbeat.  
**Update()** is your game’s real-time brain.

If you use each method correctly, your Unity game will be smoother, more stable, and more professional.