INSERT INTO department (name)
VALUES  ("Kitchen"),
        ("Education"),
        ("Marketing"),
        ("Safety"),
        ("Unrecognized Talent"),
        ("Ownership"),
        ("The Ocean");

INSERT INTO role (title, salary, department_id)
VALUES  ("Fry Cook", 34.5 ,1),
        ("Karate Instructor",35.45,2),
        ("Driving Instructor",30.34,2),
        ("Star Marketer",50.23,3),
        ("Lifeguard",55.12,4),
        ("Cashier",65.16,5),
        ("Manager", 154.34, 6),
        ("Ruler", 555.25, 7);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Squidward", "Tentacles", 6, 2),
        ("Eugene", "Krabs", 7, 9),
        ("Sandy", "Cheeks", 2, NULL),
        ("Sponge Bob", "Square Pants", 1, 2),
        ("Patrick", "Star", 4, NULL),
        ("Mrs", "Puff", 3, NULL),
        ("Mr", "Plankton", 7, 9),
        ("David", "Hasslehoff", 5, NULL),
        ("King", "Neptune", 8, 8);