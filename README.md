# Vue-directive
## Simple directive to apply animation when element is scrolled into view.


### Install:
```
npm i @swegaming-ab/vue-directive
```

### Register
```
plugins: [
    ...
    '@/node_modules/@swegaming-ab/vue-directive'
    ...
]
```

### Usage
```
<div v-animate="{ threshold: .3, animation: 'slide-in', duration: '.5s' }"></div>

```

### Options:
| Option       | Type     | Required   | Default    |
|:-------------|:---------|:-----------|:-----------|
| threshold    | Integer  | true       |            |
| animation    | String   | true       |            |
| duration     | String   | false      | .3s        |

### CSS:
```
@keyframes left-slide {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```
