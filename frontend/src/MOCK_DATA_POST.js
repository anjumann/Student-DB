const data = [
    {
        "usn": "81-6933370",
        "name": "Trumaine",
        "desc": "Vitreomacular adhesion, right eye"
    },
    {
        "usn": "71-6700551",
        "name": "Vinita",
        "desc": "Other mechanical complication of infusion catheter, sequela"
    },
    {
        "usn": "59-7781934",
        "name": "Miguel",
        "desc": "Displ Maisonneuve's fx r leg, 7thR"
    },
    {
        "usn": "10-6149410",
        "name": "Jaclyn",
        "desc": "Burn of left eye and adnexa, part unspecified, sequela"
    },
    {
        "usn": "69-9386956",
        "name": "Ulises",
        "desc": "Laceration of oth blood vessels of thorax, right side, subs"
    },
    {
        "usn": "31-9236207",
        "name": "Zarah",
        "desc": "Puncture wound w/o foreign body of unsp elbow, subs encntr"
    },
    {
        "usn": "88-0961098",
        "name": "Janaye",
        "desc": "NIHSS score 19"
    },
    {
        "usn": "40-4605711",
        "name": "Cello",
        "desc": "Poisoning by anticholinesterase agents, assault, sequela"
    },
    {
        "usn": "51-0387587",
        "name": "Sileas",
        "desc": "Burn of unsp degree of shldr/up lmb, except wrist and hand"
    },
    {
        "usn": "47-6780862",
        "name": "Layney",
        "desc": "Acute suppr otitis media w/o spon rupt ear drum, recur, bi"
    },
    {
        "usn": "38-0127434",
        "name": "Jeramie",
        "desc": "Disp fx of anterior wall of unspecified acetabulum, sequela"
    },
    {
        "usn": "09-5647975",
        "name": "Edward",
        "desc": "Poisn by oth agents prim acting on the resp sys, acc, init"
    },
    {
        "usn": "35-4839973",
        "name": "Glenden",
        "desc": "Disp fx of r tibial tuberosity, init for opn fx type 3A/B/C"
    },
    {
        "usn": "37-2134436",
        "name": "Ethelind",
        "desc": "Penetrating wound w foreign body of right eyeball, init"
    },
    {
        "usn": "67-9246335",
        "name": "Gayle",
        "desc": "Acute disseminated demyelination, unspecified"
    },
    {
        "usn": "16-1497382",
        "name": "Cornell",
        "desc": "Diseases of the dgstv sys comp pregnancy, unsp trimester"
    },
    {
        "usn": "07-9411922",
        "name": "Killian",
        "desc": "Hemorrhage from tracheostomy stoma"
    },
    {
        "usn": "54-9916111",
        "name": "Aubrette",
        "desc": "Unspecified contact dermatitis due to other agents"
    },
    {
        "usn": "87-5552424",
        "name": "Gusti",
        "desc": "Unsp comp of fb acc left in body following heart cath, subs"
    },
    {
        "usn": "32-1046774",
        "name": "Valenka",
        "desc": "Unsp fracture of right calcaneus, init for clos fx"
    },
    {
        "usn": "35-8806807",
        "name": "Hurlee",
        "desc": "Foreign body in penis, subsequent encounter"
    },
    {
        "usn": "57-0932578",
        "name": "Weber",
        "desc": "Unspecified arthropod-borne viral fever"
    },
    {
        "usn": "98-9261405",
        "name": "Kylie",
        "desc": "Disp fx of coronoid pro of l ulna, 7thN"
    },
    {
        "usn": "43-0423858",
        "name": "Heddie",
        "desc": "Corrosion of first degree of neck, subsequent encounter"
    },
    {
        "usn": "86-9182315",
        "name": "Claiborne",
        "desc": "Oth physl fx low end rad, right arm, subs for fx w nonunion"
    },
    {
        "usn": "05-8808951",
        "name": "Pippa",
        "desc": "Car passenger injured in collision w car nontraf, init"
    },
    {
        "usn": "90-0247911",
        "name": "Eolanda",
        "desc": "Contusion of right eyelid and periocular area, init encntr"
    },
    {
        "usn": "94-0085341",
        "name": "Haroun",
        "desc": "Infantile idiopathic scoliosis, sacr/sacrocygl region"
    },
    {
        "usn": "07-0830009",
        "name": "Trevor",
        "desc": "Rheumatic heart failure"
    },
    {
        "usn": "34-5548471",
        "name": "Kaylyn",
        "desc": "Periprosthetic osteolysis of internal prosthetic joint"
    },
    {
        "usn": "35-8089746",
        "name": "Shannah",
        "desc": "Unil inguinal hernia, w obst, w/o gangr, not spcf as recur"
    },
    {
        "usn": "93-1694216",
        "name": "Dannie",
        "desc": "Staphylococcal arthritis, unspecified joint"
    },
    {
        "usn": "92-7243297",
        "name": "Hyman",
        "desc": "Salter-Harris Type IV physeal fracture of r calcaneus, 7thG"
    },
    {
        "usn": "74-6005459",
        "name": "Beilul",
        "desc": "Intcran inj w loss of consciousness of unsp duration"
    },
    {
        "usn": "63-5125594",
        "name": "Joshuah",
        "desc": "Car passenger injured in collision w hv veh in traf, sequela"
    },
    {
        "usn": "49-4716031",
        "name": "Thaddeus",
        "desc": "Nondisp spiral fx shaft of rad, unsp arm, 7thB"
    },
    {
        "usn": "33-3891222",
        "name": "Arnoldo",
        "desc": "Ped on skateboard injured pick-up truck, pk-up/van, unsp"
    },
    {
        "usn": "88-1606320",
        "name": "Korey",
        "desc": "Partial traumatic amputation of forearm, level unspecified"
    },
    {
        "usn": "27-2035334",
        "name": "Mame",
        "desc": "Dysplasia of cervix uteri, unspecified"
    },
    {
        "usn": "05-4656456",
        "name": "Brendis",
        "desc": "Unsp inj intrinsic musc/fasc/tend r thm at wrs/hnd lv, subs"
    },
    {
        "usn": "80-8279844",
        "name": "Englebert",
        "desc": "Maternal care for oth fetal problems, unsp tri, fetus 2"
    },
    {
        "usn": "13-0852730",
        "name": "Garrett",
        "desc": "Other lower urinary tract calculus"
    },
    {
        "usn": "59-0442271",
        "name": "Matthus",
        "desc": "Sltr-haris Type IV physeal fx phalanx of left toe, 7thP"
    },
    {
        "usn": "79-9000511",
        "name": "Hyman",
        "desc": "Contaminated med/biolog sub, transfused or infused"
    },
    {
        "usn": "06-0629867",
        "name": "Adaline",
        "desc": "Occup of 3-whl mv injured pick-up truck, pk-up/van in traf"
    },
    {
        "usn": "85-6918732",
        "name": "Kelci",
        "desc": "Displ seg fx shaft of r tibia, subs for clos fx w malunion"
    },
    {
        "usn": "00-8275916",
        "name": "Torry",
        "desc": "Sltr-haris Type IV physl fx upr end r tibia, 7thP"
    },
    {
        "usn": "47-1289183",
        "name": "Trenna",
        "desc": "Toxic effect of lead and its compounds, undetermined, init"
    },
    {
        "usn": "31-4583886",
        "name": "Weidar",
        "desc": "Prsn brd/alit from bus injured in collision w ped/anml, init"
    },
    {
        "usn": "11-6593272",
        "name": "Clare",
        "desc": "Oth injury of muscle, fascia and tendon of left hip"
    },
    {
        "usn": "77-7722058",
        "name": "Rica",
        "desc": "Pigmentary glaucoma, bilateral, indeterminate stage"
    },
    {
        "usn": "15-3015883",
        "name": "Octavius",
        "desc": "Exhaustion due to exposure, sequela"
    },
    {
        "usn": "84-1346564",
        "name": "Jimmy",
        "desc": "Traum hemor r cereb w LOC >24 hr w ret consc lev, sequela"
    },
    {
        "usn": "86-2745730",
        "name": "Reinaldo",
        "desc": "Unsp injury of unsp blood vess at lower leg level, left leg"
    },
    {
        "usn": "08-0565818",
        "name": "Gery",
        "desc": "Contusion of right breast, initial encounter"
    },
    {
        "usn": "53-4249702",
        "name": "Marvin",
        "desc": "Unsp traum nondisp spondylolysis of 4th cervcal vert, sqla"
    },
    {
        "usn": "47-7230000",
        "name": "Liva",
        "desc": "Other specified bacterial diseases"
    },
    {
        "usn": "51-2879477",
        "name": "Manolo",
        "desc": "Algoneurodystrophy, hand"
    },
    {
        "usn": "29-9495535",
        "name": "Hermie",
        "desc": "Diphtheritic tubulo-interstitial nephropathy"
    },
    {
        "usn": "42-1183188",
        "name": "Lief",
        "desc": "Fistula of intestine"
    },
    {
        "usn": "73-4714485",
        "name": "Giulio",
        "desc": "Unsp injury of musc/fasc/tend at forarm lv, right arm, init"
    },
    {
        "usn": "99-2736641",
        "name": "Sharyl",
        "desc": "Osteopathy after poliomyelitis, ankle and foot"
    },
    {
        "usn": "05-5590424",
        "name": "Brien",
        "desc": "Unspecified injury of duodenum, subsequent encounter"
    },
    {
        "usn": "20-3278884",
        "name": "Hayley",
        "desc": "Unspecified sprain of unspecified finger, sequela"
    },
    {
        "usn": "12-8178204",
        "name": "Cornelius",
        "desc": "Displacement of unspecified vascular grafts, subs encntr"
    },
    {
        "usn": "12-8337007",
        "name": "Netty",
        "desc": "Unspecified injury of ulnar artery at forearm level"
    },
    {
        "usn": "93-1954051",
        "name": "Venus",
        "desc": "Driver of pk-up/van inj in clsn w nonmtr veh in traf, init"
    },
    {
        "usn": "47-3803260",
        "name": "Dunc",
        "desc": "Poisoning by emetics, intentional self-harm, init encntr"
    },
    {
        "usn": "41-5108459",
        "name": "Bail",
        "desc": "Malignant neoplasm of mediastinum, part unspecified"
    },
    {
        "usn": "90-6028530",
        "name": "Erasmus",
        "desc": "Di George's syndrome"
    },
    {
        "usn": "59-6973199",
        "name": "Rubin",
        "desc": "Contusion of left hand, initial encounter"
    },
    {
        "usn": "13-8343140",
        "name": "Sibbie",
        "desc": "Inj r int crtd,intcr w LOC w dth d/t brain inj bf consc,init"
    },
    {
        "usn": "50-4794732",
        "name": "Lindsay",
        "desc": "Malignant neoplasm of right spermatic cord"
    },
    {
        "usn": "91-1259390",
        "name": "Shoshana",
        "desc": "External constriction of unsp eyelid and periocular area"
    },
    {
        "usn": "82-8271430",
        "name": "Meggi",
        "desc": "Other forms of chromomycosis"
    },
    {
        "usn": "08-6062986",
        "name": "Deerdre",
        "desc": "Comp of renal artery following a procedure, NEC, subs"
    },
    {
        "usn": "06-8468588",
        "name": "Laina",
        "desc": "Oth nondisp fx of base of 1st MC bone, l hand, 7thG"
    },
    {
        "usn": "55-1344052",
        "name": "Syman",
        "desc": "Sltr-haris Type I physeal fx phalanx of unsp toe, 7thG"
    },
    {
        "usn": "93-1682194",
        "name": "Reinald",
        "desc": "Foreign body in conjunctival sac, unsp eye, subs encntr"
    },
    {
        "usn": "84-8850242",
        "name": "Rocky",
        "desc": "Civilian aircraft in air trnsp accident w military aircraft"
    },
    {
        "usn": "71-8477842",
        "name": "Wayne",
        "desc": "Disp fx of greater trochanter of l femr, 7thQ"
    },
    {
        "usn": "40-9189392",
        "name": "Karlen",
        "desc": "Other fracture of lower end of unspecified tibia"
    },
    {
        "usn": "02-2671106",
        "name": "Kimball",
        "desc": "Laceration with foreign body of unsp part of head, sequela"
    },
    {
        "usn": "70-5272897",
        "name": "Eberto",
        "desc": "Nondisp transverse fx r patella, 7thH"
    },
    {
        "usn": "84-8499271",
        "name": "Zorine",
        "desc": "Barton's fx left radius, subs for clos fx w malunion"
    },
    {
        "usn": "16-0878207",
        "name": "Veronike",
        "desc": "Multiple perforations of tympanic membrane"
    },
    {
        "usn": "60-0392953",
        "name": "Gibb",
        "desc": "Pnctr w/o fb of right lesser toe(s) w/o damage to nail, sqla"
    },
    {
        "usn": "26-6560036",
        "name": "Hansiain",
        "desc": "Contusion of right forearm, sequela"
    },
    {
        "usn": "04-5648217",
        "name": "Dave",
        "desc": "Acquired deformity of pinna, unspecified ear"
    },
    {
        "usn": "94-0899482",
        "name": "Beau",
        "desc": "Person outsd 3-whl mv inj in clsn w hv veh in traf, sequela"
    },
    {
        "usn": "19-9898102",
        "name": "Ly",
        "desc": "Burn of third degree of knee"
    },
    {
        "usn": "14-1333745",
        "name": "Glynda",
        "desc": "Food protein-induced enteropathy"
    },
    {
        "usn": "25-1002339",
        "name": "Ky",
        "desc": "Unsp fracture of left ilium, init encntr for open fracture"
    },
    {
        "usn": "18-8799046",
        "name": "Rosco",
        "desc": "Major laceration of head of pancreas, subsequent encounter"
    },
    {
        "usn": "21-6033197",
        "name": "Vina",
        "desc": "Military operations involving unarmed hand to hand combat"
    },
    {
        "usn": "34-0321250",
        "name": "Darice",
        "desc": "Milt op w chem weapons and oth unconvtl warfare, civ, subs"
    },
    {
        "usn": "36-4465858",
        "name": "Lianna",
        "desc": "Nondisplaced avulsion fracture of right ischium, sequela"
    },
    {
        "usn": "12-5168759",
        "name": "Tessie",
        "desc": "Open bite of right upper arm, subsequent encounter"
    },
    {
        "usn": "88-4660295",
        "name": "Marketa",
        "desc": "Other infective (teno)synovitis, right shoulder"
    },
    {
        "usn": "47-3110409",
        "name": "Blake",
        "desc": "Abrasion, left foot, initial encounter"
    }
]

export default data