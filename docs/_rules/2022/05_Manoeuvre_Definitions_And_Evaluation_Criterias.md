---
title: Maneuver definitions and evaluation criteria
section: 5
year: 2022
---

{% assign tricks = site.tricks | where_exp: "item", "item.id contains page.year" | sort: "coef" -%}
## Solo and Synchro
{% for trick in tricks -%}
{%   if trick.synchro_only != true -%}
{%     include trick_in_rules.md %}
{%   endif -%}
{% endfor -%}

## Synchro only
{% for trick in tricks -%}
{%   if trick.synchro_only -%}
{%     include trick_in_rules.md %}
{%   endif -%}
{% endfor -%}

## Landing
### Solo and Synchro

#### Approach and precision
* Land on the raft for maximum score.
* Quality of the approach and precision (distance to the raft).

#### Raft
* Pilot landing smoothly on his feet for maximum score.
* Landing fully on the raft.

#### Ground Spiral
* Minimum 360° revolution, height of wing tip over water, less than3m at the lowest point.
* Entry (speed, sink rate), height of wing tip over water (touch for max. score).

#### Hand touch
* Precision, length of touch with hand.

#### Foot touch
* Precision, length of touch with foot.

#### Jesus walk
* Precision, length of walk and frequency of the steps.

#### Spin
* Minimum rotation: ½ turn before pilot lands.
* Speed of rotation, good sink rate and standing landing.

#### Raft flip
* Control and effectiveness

### Synchro only

#### Synchro Ground Spiral
* Minimum 720° revolution when performed independently, or 360° when following a Synchro Spiral (total 3 revolutions), height of wing tip below 3m at the lowest point.
* Entry (speed, sink rate), height of wing tip over water (touch for maximum score) in close proximity to each other.

#### Wingovers Cruzado Inside Landing
* Same criteria as Wingovers Cruzados.
* Minimum one pendulum to each side and 360° in spiral.
* After the last inside pendulum connection to a spiral until the water as a Synchro Ground Spiral.
* Height of wing tip below 3m at the lowest point.
* Entry (speed, sink rate), height of wing tip over water (touch for maximum score) in close proximity to each other.

#### Wingovers Cruzado Outside Landing
* Same criteria as Wingovers Cruzados.
* Minimum one pendulum to each side.
* After the last outside pendulum connection to a spiral till the water as a Ground Spiral performed individually.
* Height of wing tip below 3m at the lowest point.
* Entry (speed, sink rate), height of wing tip over water (touch for maximum score).

#### Pitch Pendulum Landing
* Rapid and synchronized entry. Pilots should be vertically aligned for maximum score.
* Minimum twice, one over the other.
* The lower pilot must be less than 3m over the water in the last pitch, 1m or less over the water for maximum score.

## Choreography

### Placement and Drift
* For maximum score: start the programme considering the drift of the routine and finish with enough altitude for the (+ spiral) landing approaching the raft.

### Management of Altitude
* Managing all manoeuvres of the programme and using all the altitude available.

### Flow
* Each manoeuvre has to be flown fluently with good energy management.

### Rhythm and Connection
* Good energy management between the manoeuvres and smooth connections.

### Originality and Diversity
* Innovative and varied use of spin/stall/dynamic maneuvers.
* Also moving to both sides left and right.
* Using different entries for manoeuvres.
* Appeal to public.

### Synchro Coordination
* Maintain the same altitude when performing the manoeuvres. Staying
    in close proximity to each other. Starting/ending manoeuvres
    simultaneously.
