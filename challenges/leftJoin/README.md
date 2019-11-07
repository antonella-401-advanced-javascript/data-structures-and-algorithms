# Left Join
We will be creating a left join.
## Challenge
The challenge entails joining two hashmaps into a single data structure.
## Approach & Efficiency
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.