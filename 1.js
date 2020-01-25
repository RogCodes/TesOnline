function Biodata(biodata)
{
    let biodataRandi =
    {
        "name": biodata,
        "age":25,
        "address": "Desa Sidorejo Kecamatan Jabung Kabupaten Malang",
        "hobbies": 
        [
            "Berenang",
            "Travelling",
            "Programming",
        ],
        "is_married":false,
        "list_school":
        [
            {
                "name"      :"SDN Sidorejo 2",
                "year_in"   :2001,
                "year_out"  :2007,
                "major"     :null
            },
            {
                "name"      :"SMPN 1 Tumpang",
                "year_in"   :2007,
                "year_out"  :2010,
                "major"     :null
            },
            {
                "name"      :"SMKN 10 Malang",
                "year_in"   :2010,
                "year_out"  :2013,
                "major"     :"TKJ"
            },
            
        ],
        "skills":
        [
            {
                "skill_name"    :"PHP",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"HTML",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"javascript",
                "level"         :"beginner"
            },
        ],
        "interest_in_coding": true
    }

    return biodataRandi;
}

console.log(Biodata("Randi Maulana Akbar"));