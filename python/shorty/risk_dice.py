import random

atkUnitloss = 0
defUnitloss = 0
msg = []
defenders = []
attackers = []
dice = []

for x in range(5):
    dice.append(random.randrange(1,7))

attackers = dice[0:3]
attackers = [int(x) for x in attackers]
attackers.sort(reverse=True)
defenders = dice[3:5]
defenders = [int(x) for x in defenders]
defenders.sort(reverse=True)

msg0 = "Dice: \n"
msg1 = "Attacker: "+str(attackers[0])+"-"+str(attackers[1])+"-"+str(attackers[2])+"\n"
msg2 = "Defender: "+str(defenders[0])+"-"+str(defenders[1])+"\n"

print(msg0,msg1,msg2)

"""
isinstance(x, int)  //typechecker

"""
for i in range(2):
    if attackers[i] is defenders[i]:
        pass
    elif attackers[i] > defenders[i]:
        defUnitloss += 1
    else:
        atkUnitloss += 1

msg0 = "Outcome: \n"
msg1 = "Attacker: Lost "+str(atkUnitloss)+" unit \n"
msg2 = "Defender: Lost "+str(defUnitloss)+" unit \n"

print(msg0,msg1,msg2)

if __name__ == "__main__":
    pass


