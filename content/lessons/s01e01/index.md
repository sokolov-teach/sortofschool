---
title: Position, Displacement and Vectors
date: 2024-12-17
author: Sviatoslav Sokolov
draft: false
tags: 
weight: 2
header_img: 
header_img_descript: 
toc: true
autonumbering: true
---
How can we tell if someone truly understands Physics?
Let's answer this question with another. How do we determine that a person knows a language? It is easy; if a person can maintain a dialogue — written or verbal — and at the same time we understand him, and he understands us, it means that we speak the same language.

To know Physics is to know its language, to be able to make words out of letters and meaningful sentences out of words. And if your speech or text resonates in people's hearts, it means that you have mastered this language.

We start learning any language with its basic part — letters. In order for you to understand what I will be talking about in future lectures, we need to learn the basic concepts of Physics.

The first part of this series will be about **Kinematics**. Kinematics is derived from the Greek word for *"to move"*. Kinematics is a branch of Physics. It is not interested in **WHY** bodies move and **WHAT** sets them in motion. This section of physics only studies **HOW** they move and the ways that we can describe their motion.  

In kinematics we study the motion of idealized bodies. The first concept of such a body is a **particle**. 
## Elementary
---
### Point-like particle
A **particle** or **point-like particle** is a fundamental concept in physics.

Imagine an airplane. Up close, this is a very complex object. Yet, when it's flying high above, it looks like a tiny dot. If it travels 100 kilometers, we don't distinguish which specific part of the airplane covers that distance. For our calculations, it just does not matter.

Alternatively, we can think of a point-like particle as a tiny dot we draw on a large object with a marker and we track this dot's movement instead of the entire airplane.

> [!NOTE] **Point-like particle**.
> Is an object that is small enough relative to the distance it travels.

In physics, such simplifications are often resorted to. The reason is that, otherwise, we would never solve any problem. The world around us is much more complex than the mathematical models into which we try to put it. Despite this fact, the accuracy of the answers we get by simplifying the world in this way is quite sufficient to solve the problems we encounter.

Now you know that if we see the words **"point-like particle"** in a problem, we imagine something small, the size, shape, and composition of which we are not interested.

### Trajectory and Total Distance

Imagine an airplane circling high above, leaving a trail from its engines. This trail reveals the **trajectory** of a plane. 

> [!NOTE] **Trajectory** 
> Is the path that a moving object follows.

The **total distance** or **distance traveled** represents the entire length of this trajectory. Its value includes the lengths of all its curves and straight sections of the plane’s journey. 

> [!NOTE] **Total distance** or **distance traveled** 
> Is the length of the trajectory. We will denote it as $d$.

### Frame of reference

A **frame of reference** is used to describe the position of an object in space. It is defined by three main elements: the **origin**, **orientation**, and **scale**.

Imagine a road with milestones. The zero milestone represents the **origin**. In one direction from the origin lie milestones that are numbered negatively. In the other direction, they are numbered positively; this direction is our **orientation**. The distance between the milestones (it can be measured in kilometers, miles, etc.), is the **scale**. Together these three elements represent our **frame of reference**.

The concept of **frame of reference** is similar to a **one-dimensional axis** in math. It serves the purpose of a **coordinate system** and provides a way to describe an object's position.

This brings me to one of my favorite things in physics: you can choose **ANY** point as your origin, **ANY** direction for orientation and **ANY** scale. Why? Because these axes are just mathematical representations of reality. They help us to describe the movement of objects, but do not influence it. Some frames of reference make solving the problem easier, but if we are not concerned with the complexity of calculations, the final result will be exactly the same, no matter what frame of reference we choose.

>[!QUOTE] **Frame of reference** VS **Observational frame of reference**
>*Apart from the term **frame of reference**, we also have the **observational frame of reference**.  They are a little bit different. The first one sets the mathematical stage for describing the motion, and the second one sets the viewpoint from which we observe the motion. We will discuss observational frames later when we talk about inertial and non-inertial frames.*

### Position
Using the road analogy we described earlier, the **position** of the object is a milestone number that our car is next to. If we use the **x-axis** to represent our **frame of reference**, the position of a car is denoted with the variable $x$. 

### Displacement

>[!NOTE] **Displacement** 
>refers to the change in position and is denoted as:
>$$ \Delta x = x - x_0 $$ 
where $x$ represents the current position, and $x_0$ the initial position.

Positive displacement means movement in the positive direction of our axis, while negative displacement signifies movement in the opposite direction.


>[!NOTE] **Delta ($\Delta$):** 
>This triangle symbol literally means *"change in"*. 
>
>So, $\Delta x$ signifies the change in position. This symbol can be used to describe the change in any value. For example, $\Delta m$ is a change of mass, $\Delta t$ represents a change in time, etc.

The **magnitude of displacement** is the **absolute value** of displacement and is denoted as $|\Delta x|$. It shows how much the object has moved without concern for direction.

>[!WARNING] **Total Distance** vs. **Displacement** vs. **Magnitude of Displacement** <br>
Let’s say that the car moved 7 kilometers in the positive direction of the x-axis and then 10 kilometers in the opposite direction. In this case, total distance, displacement and its magnitude will be equal to: 
> $$\begin{cases}
d = 17 km \\
\Delta x = -3 km \\
|\Delta x| = 3 km \\
\end{cases}
$$


## Intermediate

### Vector and Scalar quantities

There are a lot of different quantities that are used in physics. All of them fall in one of two brackets: either **scalar** or **vector**.

**Scalar** quantities are represented only by their values. You can perform standard arithmetic operations with them, as you would in algebra. Some examples of such values are mass, temperature, time. 

**Vector** quantities, unlike scalars, in addition to their numerical value, have a direction. Examples of such values are velocity, acceleration, force, and many more. 

When working with such values we need to remember that they have a direction, and subsequently, familiar mathematical operations such as addition, subtraction, multiplication, need to be changed or redefined to take direction of these values into account. 

### Position vector

Let's learn the language of vectors using a **position vector** as an example. The **position** that we’ve talked about previously, is actually a vector quantity. It is often necessary to specify not only how far from the origin point the object is located, but also in which direction.

>[!NOTE] The **position vector**, or **radius vector**; 
>Represents  the direction and distance of a point relative to the origin of the frame of reference. It is denoted as $\bar{r}$.


In physics it is important to differentiate between vector and scalar quantities, that's why they are denoted differently. The main ways to denote a vector are to use the dash or arrow above the symbol that represents a vector. Some books or articles prefer to use bold text instead. 
$$\bar{r}, \vec{r}, \textbf{r}$$
I prefer to use dashes, because it is quicker to draw by hand than the arrows, and bold text is not bold enough by my liking in most of the fonts, to really differentiate it on a first glance.

In diagrams vector quantities are drawn as arrows, where the direction of an arrow shows direction of the quantity, and its length is proportional to magnitude of the vector, i.e. the longer the arrow, the larger the absolute value of this vector quantity.

The size or the **magnitude** or the **absolute value** of the vector is essentially its length. It is always positive. In math we use two vertical dashes to represent modulus of scalar value. With vector values it becomes very tedious to do so — we need to draw 3 dashes — two vertical and one horizontal. So, instead we ditch them all! If you see a vector quantity without any dashes, this implies that you are seeing the magnitude of this vector.

$\bar{r}$  — position vector

$|\bar{r}| \equiv r$  — magnitude of position vector


>[!Warning] **Remember:** 
>Vector isn't just a number. It has magnitude and direction. Its magnitude can be a number, but a vector is more than that. 
>
> **So avoid writing:** $\bar{r} = 5 km$


### Frame of Reference in 2D

So far, we have discussed only movement along a straight line. The implementation of vectors allows us to describe the position of a point (and, consequently, its movement) in a **2D plane** using the **Cartesian** (or **rectangular**) **coordinate system**.

In this system, we expand our **frame of reference** by adding a second axis, the **y-axis** (vertical), perpendicular to the **x-axis** (horizontal). These two axes intersect at the **origin** point of the **frame of reference**.

Every point in this 2D plane can be described by a combination of two values — x and y, where x is the distance from a point to the y-axis, and y is the distance from a point to the x-axis.

### Vector Components

Now, let’s imagine a lamp that shines directly onto position vector $\bar{r}$ and casts a shadow onto the x-axis. The length of this shadow represents the **x-component** of the position vector.
We denote this as $r_x$, to show it's the x-component of the vector $\bar{r}$.

>[!WARNING] When we discussed **position** ($x$) in Level 1, we were actually referring to the $r_x$ component of the position vector $\bar{r}$. 

The direction of this shadow dictates its sign. If the shadow tip looks in the same direction as an axis, then it is positive. If the shadow and an axis look in different directions, then the component of the vector is negative.

Casting the shadow of our vector onto the x-axis forms a right triangle. This triangle has the position vector $\bar{r}$ as its hypotenuse and its shadow as one of its legs (or catheti).

Using trigonometry, we can find the length of this x-axis projection. The length of the x component, rx, is equal to:
$$r_x=r \cos(\alpha)$$ 
where r is the magnitude of the position vector, and α is the angle between it and the x-axis.

**Vector is aligned with the axis.**
In this case, the angle between the vector and the axis is equal to zero. Consequently, the cosine of this angle is equal to one, so the component of the vector is equal to its magnitude. 
$$r_x=r\cos(0^\circ)=r$$
This conclusion matches our visual image — the shadow has the same length as the vector itself.

**Vector is perpendicular to the axis.**
This way, the vector does not cast any shadow to the axis, so its component should be equal to zero — the same way as the pole does not cast any shadow  when the sun is at its highest (at zenith/directly overhead). Let’s check if this conclusion matches our equation. In this case vector and axis form a right angle (90 degrees)
$$r_x=r\cos(90^\circ)=0$$

**Vector direction is opposite to the axis.**
When the vector is directed opposite to the axis, the length of the shadow is equal to the magnitude of the vector, but its sign is negative. The angle between them is equal to 180 degrees, so the cosine of the angle is equal to the negative one.
$$r_x=r\cos(180^\circ)=-r$$


>[!NOTE] The **x-component** of the vector $\bar{r}$ is denoted as $r_x$.  
>It varies in the range of $[-r;r]$ and is equal to: $$r_x=r\cos(\alpha)$$ where $r$ is the magnitude of vector $\bar{r}$, and $\alpha$ is the angle between the vector and the axis.


In the similar fashion we can describe the y-component of the vector. In this case we also should be looking at the angle  between the vector and the y-axis. The visual representation stays the same — we are imagining the shadow that the vector casts to the y-axis.
$$r_y=r\cos(\beta)$$

However, in most cases it is easier to describe both components of the vector in relation to one angle (usually angle between vector and the x-axis is taken). So, if we take into account the fact that angles alpha and beta make the right angle:
$$ \beta = 90^\circ-\alpha$$
$$r_y=r\cos(90^\circ-\alpha)$$
And using conversion formula we get:
$$r_y=r\sin(\alpha)$$


>[!Warning] It is important to note that there is no inherent connection between x-axis and cosine and y-axis and sine. The only reason why we got these equations was the way we chose our axis and angles through which we express components. If we decide to choose angle beta as our main angle (or swap x-axis and y-axis), we will get:
>$$
\begin{cases}
r_x=r\sin(\alpha) \\
r_y=r\cos(\alpha)
\end{cases}
$$


Positions of x and y axes (as horizontal and vertical) and angles that we choose are merely conventions and standard practices. We can (and would in the future) change them, if we see it convenient. 


>[!INFO] Regardless of the specific axis or orientation, **any** component of **any** vector can be expressed as the magnitude of that vector multiplied by the cosine of the angle it makes with the axis. 
$$\text{component}=|\text{vector}| \cdot \cos(\theta)$$
where $\alpha$ is the angle between the vector and the chosen axis.
And its perpendicular component is expressed by:
$$\text{component}_\bot=|\text{vector}| \cdot \sin(\theta)$$



> [!NOTE] **Resolving a vector** is the process of calculating all of its components. This helps to see the vector's influence in the directions of our axes. 
> $$
\begin{cases}
r_x=r\cos(\alpha) \\
r_y=r\sin(\alpha)
\end{cases}
$$



If we know both components of the vector we can find its **magnitude** by using the Pythagorean theorem, because the components of the vector form a catheti of right angle triangle with the vector itself representing its hypotenuse.
$$r^2 = r_x^2+r_y^2$$

The trigonometric formulas that apply to a right triangle also can be applied for a vector and its components.

|Function							|Angle (Inverce function)				|
|--------------						|-----------							|
| $$\cos(\alpha) = \frac{r_x}{r}$$ 	| $$\alpha = \arccos{\frac{r_x}{r}}$$ 	|
| $$\sin(\alpha) = \frac{r_y}{r}$$ 	| $$\alpha = \arcsin{\frac{r_y}{r}}$$ 	|
| $$\tan(\alpha) = \frac{r_y}{r_x}$$| $$\alpha = \arctan{\frac{r_y}{r_x}}$$ |

### Addition of vectors
We are familiar with operations such as addition, subtraction, multiplication, and division in algebra. However, for vectors, these operations need to be redefined. This is because a vector has two things: its magnitude and direction. 

What do we get when we add two vectors? A new vector? What is the magnitude and direction of this new vector? Similar questions could be asked about the subtraction, multiplication, and division of two vectors. In this lesson, we address only addition and subtraction and will discuss multiplication later in this course.

When we add two vectors, we get a vector called the **vector sum** (also known as the **resultant** or the **net** of two vectors).
$$\bar{c}=\bar{a}+\bar{b}$$

To determine the **resultant** graphically, we can use the **parallelogram method**.

To use this method we place both vectors in such a way, so their starting point is the same. Then, we draw two lines, parallel to each vector, so they form a parallelogram. Then, we draw two lines parallel to each vector, forming a parallelogram.

Another way to find the **net** of two vectors is to use the **tail-to-tip** method. With this approach, we draw two vectors such that the endpoint of the first vector coincides with the starting point of the second vector. The sum vector begins at the starting point of the first vector and ends at the endpoint of the second vector.

This method is useful when performing the addition of multiple vectors. We place them one by one consecutively. The resultant will be drawn from the starting point of the first vector and end at the endpoint of the last vector.
$$\bar{d}=\bar{a}+\bar{b}+\bar{c}$$

Let’s look at some specific cases. Let's take two vectors with magnitudes of 4 and 3 for experimentation.

If these two vectors point in the same direction, the magnitude of the resultant vector will be equal to the sum of their magnitudes, which is 7.
$$\bar{c}=\bar{a}+\bar{b}$$
$$c=a+b=4+3=7$$

If these two vectors point in opposite directions, the magnitude of their sum will be equal to the absolute value of the difference between their magnitudes.
$$\bar{c}=\bar{a}+\bar{b}$$
$$c=|a+b|=|4-3|=1$$


> [!Warning] **This is still a vector addition process, even though we subtract their magnitudes!**


When two vectors are perpendicular to each other, they form a right triangle, with the vectors as the legs of this triangle. Therefore, the magnitude of the resultant vector, which is the hypotenuse, can be found using the Pythagorean theorem.
$$
\begin{align*}
&\bar{c}=\bar{a}+\bar{b} \\
&c^2 = a^2 + b^2 \\
&c = \sqrt{a^2 + b^2} = \sqrt{3^2 + 4^2} = 5
\end{align*}
$$

When two vectors are at some angle to each other (denoted as $\alpha$), neither parallel nor perpendicular, they form a triangle. The magnitude of their resultant can be determined using the Law of Cosines, which I like to think of as an extended form of the Pythagorean theorem.
$$
\begin{matrix}
\bar{c}=\bar{a}+\bar{b} \\
c^2 = a^2 + b^2 -2ab\cos{(180^\circ - \alpha)} \\
\end{matrix}
$$

Using the trigonometric identity $cos(180^\circ-\alpha)=-cos(\alpha)$, this becomes:
$$c^2 = a^2 + b^2 +2ab\cos{(\alpha)}$$

If we want to find an angle between two vectors, we can solve this equation with respect to $\alpha$:
$$
\begin{matrix}
\cos(\alpha)=\frac{c^2-a^2-b^2}{2ab} \\
\alpha=\arccos{(\frac{c^2-a^2-b^2}{2ab})}
\end{matrix}
$$

>[!WARNING] Even if it seems like we perform different operations based on vector orientation, at its core, we are still dealing with vector addition.

When adding vectors using their components, think of combining the shadows they cast on the x and y axes. Let's demonstrate this with two vectors, $\bar{a}$ and $\bar{b}$, to find their resultant $\bar{c}$.

$$\bar{c}=\bar{a}+\bar{b}$$

First, we resolve vectors $\bar{a}$ and $\bar{b}$. If $\bar{a}$ makes an angle $\alpha$ with the x-axis, its components are:

$$
\begin{align*}
a_x&=a\cos(\alpha) \\
a_y&=a\sin(\alpha)
\end{align*}
$$

For vector $\bar{b}$, which forms an angle $\beta$ with the x-axis it resolves like this:

$$
\begin{align*}
b_x&=b\cos(\alpha) \\
b_y&=b\sin(\alpha)
\end{align*}
$$

To get the x and y components of the resultant vector $\bar{c}$, we add their respective components together:
$$
\begin{align*}
c_x&=a_x+b_x \\
c_y&=a_y+b_y
\end{align*}
$$

Finally, to determine the magnitude and direction of the resultant vector c, we use the following equations:
$$
\begin{align*}
c &= \sqrt{c_x^2+c_y^2} \\
\theta &= \arctan(\frac{c_y}{c_x})
\end{align*}
$$

### Multiplication of a Vector by a Scalar
Imagine a vector $\bar{a}$. When we multiply it by a scalar, say 2, the result is a new vector $\bar{c}$. Let's explore what this means for the magnitude and direction of $\bar{c}$.
$$\bar{c}=2\cdot\bar{a}$$

The magnitude of c will be double that of a. Thus, c will have twice the length of a:
$$c=2\cdot a$$

Moreover, the new vector will point in the same direction as a starting vector $\bar{a}$. But if we multiply $\bar{a}$ by a negative value, like $-2$, the resulting vector will have the same magnitude but will point in the opposite direction.
$$
\begin{matrix}
\bar{c} = -2\cdot \bar{a} \\
c = 2 \cdot a
\end{matrix}
$$

To summarize, scalar multiplication changes the length of a vector. If the scalar is negative, the direction of the vector reverses.

Specifically, if $\bar{a}$ is multiplied by $-1$, the result is $-\bar{a}$, known as the negative vector. This new vector has the same magnitude but points in the reverse direction.

### Vector Subtraction
To subtract two vectors, we can use the same rules as we did for addition, with a slight twist. Essentially, subtracting vector $\bar{b}$ from vector $\bar{a}$ is the same thing as adding vectors $\bar{a}$ and $-\bar{b}$.
$$
\begin{matrix}
\bar{c} = \bar{a}-\bar{b} \\
\bar{c} = \bar{a}+(-\bar{b})
\end{matrix}
$$

Visually, this is equivalent to joining the starting point of the vector $-\bar{b}$ to the end point of vector $\bar{a}$.
If you want to approach this task using their individual components, vector $\bar{c}$ can be constructed by subtracting the components of vector $\bar{a}$ and $\bar{b}$:
$$
\begin{align*}
c_x&=a_x-b_x \\
c_y&=a_y-b_y
\end{align*}
$$

### Displacement vector
With our knowledge of vectors, we can redefine the **displacement vector** in a 2D plane.
The displacement vector $\Delta\bar{r}$ is the difference between the final position vector $\bar{r}$ and the initial position vector $\overline{r_0}$.
$$\Delta\bar{r} = \bar{r}-\overline{r_0}$$


>[!WARNING] Our earlier discussion on **displacement** ($\Delta x$) in Level 1 was actually about the x-component of the **displacement vector**.
$$\Delta x = \Delta r_x$$


Another way to understand displacement is through vector addition. By adding the **initial position vector** and **displacement vector**, we get the **final position vector**:
$$\overline{r_0} + \Delta\bar{r} = \bar{r}$$

## Advanced
### Unit vectors
Unit vectors address the issue of representing a vector solely by its magnitude, as shown here:
$$\bar{r} = 5$$

This kind of notation is incorrect because it lacks the vector's directional information.

A **unit vector** helps to solve this problem. A unit vector is unitless, has a magnitude of 1, and indicates only direction. In a 3D Cartesian system, the three main unit vectors are:

1. $\hat{i}$ — points in the direction of the x-axis.
2. $\hat{j}$ — points in the direction of the y-axis.
3. $\hat{k}$ — points in the direction of the z-axis.

These three vectors form the **basis** for the system.  Any vector $\bar{r}$ in this system can be expressed as a linear combination of them:
$$\bar{r}=r_x\hat{i}+r_y\hat{j}+r_z\hat{k}$$
where $r_x$, $r_y$ and $r_z$ are the components of the vector $\bar{r}$ in the x, y, and z axes, respectively.

The unit vectors $\hat{i}$, $\hat{j}$, and $\hat{k}$ define the system's orientation. In a right-handed system, curling your fingers from $\hat{i}$ (x-axis) to $\hat{j}$ (y-axis) makes your thumb point towards $\hat{k}$ (z-axis). 

>[!quote] *There is also a left-handed system, but the right-handed one is more common in physics. Maintaining the right orientation is vital, especially for the operation of vector multiplication that we will discuss in a future.*

The beauty of unit vector notation lies in its ability to simplify vector operations. Here's how:

**For addition:**
$$\bar{a}+\bar{b}=(a_x+b_x)\hat{i}+(a_y+b_y)\hat{j}+(a_z+b_z)\hat{k}$$

**For subtraction:**
$$\bar{a}-\bar{b}=(a_x-b_x)\hat{i}+(a_y-b_y)\hat{j}+(a_z-b_z)\hat{k}$$

**For multiplication by a scalar:**
$$C\cdot\bar{a}=C a_x \hat{i}+C a_y \hat{j}+C a_z \hat{k}$$

### Plane Polar Coordinates
Cartesian coordinates $(r_x,r_y)$ describe a point in a plane by its horizontal and vertical positions. In contrast, **plane polar coordinates** $(r,\alpha)$ represent the same point by its distance $r$ from the origin and the angle $\alpha$ it forms with the positive x-axis.

Converting between the two coordinate systems:

From Cartesian to Polar:
$$
\begin{align*}
r &= \sqrt{r_x^2+r_y^2} \\
\alpha &= \arctan(\frac{r_y}{r_x})
\end{align*}
$$

From Polar to Cartesian:
$$
\begin{align*}
r_x&=r\cos(\alpha) \\
r_y&=r\sin(\alpha)
\end{align*}
$$

Some problems, especially those related to circular motion, are more easily tackled using polar coordinates.

### Vector Representation with its Directional Unit Vector
When describing vectors, especially in polar coordinate systems, it is beneficial to express them in terms of their magnitude and direction. The direction is typically represented by a **directional unit vector**, which has a magnitude of 1 and points in the specified direction.

For instance, the positional vector $\bar{r}$ can be expressed as:
$$\bar{r} = r \overline{e_r}$$
Here, $r$ is the magnitude of the positional vector we're describing, and $\overline{e_r}$ is its unit vector, pointing in the direction of $\bar{r}$

Similarly, a displacement vector $\Delta \bar{r}$ can be represented as:
$$\Delta \bar{r} = |\Delta \bar{r}| \cdot \overline{e_{\Delta r}}$$

It's essential to note a distinction here: unlike in our earlier discussions where the magnitude of a vector was represented without vertical bars, they are crucial in this context. The bars around $|\Delta \bar{r}|$ emphasize **magnitude of change in position**, while $\Delta r$ indicates the **change in magnitude of position**, which does not consider direction of a vector.

To understand this difference:

1. If there is only a change in the direction of position, the displacement magnitude is non-zero, i.e., $|\Delta \bar{r}|>0$, but the change in magnitude is zero, $\Delta r = 0$.

2. If the change is solely in the magnitude of position, both values are the same: $|\Delta \bar{r}| = \Delta r$.


## Additional links, acknowledgements, and attributions
- **"Physics: A General Course"** by I.V. Savelyev
- **"Physics"** by G.Y. Myakishev 
- **"General physics course"** by D.V. Sivukhin 
- **"Conceptual Physics"** by Paul G. Hewitt
- **"Physics: Principles with Applications"** by Douglas C. Giancoli
- **"Physics for Scientists and Engineers"** by Raymond A. Serway and John W. Jewett
- **"Physics"** by Alan Giambattista, Betty Richardson, and Robert C. Richardson
- **"Fundamentals of Physics"** by David Halliday, Robert Resnick, and Jearl Walker

# Test of elements

$$
\Delta x = x - x_0 \tag{1.1} \label{eq1}
$$

See equation  $\eqref{eq1}$ [(1.1)](#mjx-eqn:eq:deltax)

![test](qr_codes/8_Byte_mode_block.png "")