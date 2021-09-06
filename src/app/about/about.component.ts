import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Skills : Array<any>=[

    {ProgrammingLanguage:"Php"
      ,logo:"../assets/images/php.png"
    },
    {ProgrammingLanguage:"Java"
      ,logo:"../assets/images/java.png"
    },
    {
      ProgrammingLanguage:"laravel"
      ,logo:"../assets/images/Lar.jpg"
    },
    {ProgrammingLanguage:"Html 5"
      ,logo:"../assets/images/Html.png"
    },
    {ProgrammingLanguage:"CSS"
      ,logo:"../assets/images/css.png"
    },
    {ProgrammingLanguage:"C++"
    ,logo:"../assets/images/c.png"
    },
    {ProgrammingLanguage:"PhpMyAdmin"
      ,logo:"../assets/images/myyy.jpg"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
