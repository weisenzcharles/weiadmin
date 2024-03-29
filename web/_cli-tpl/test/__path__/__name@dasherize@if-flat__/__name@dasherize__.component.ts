import {Component, OnInit

< %
if (!!viewEncapsulation) { %>,
  ViewEncapsulation < %
}
%>
< %
if (changeDetection !== 'Default') { %>,
  ChangeDetectionStrategy < %
}
%>
}
from
'@angular/core';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html', < % if
(!inlineStyle)
{ %>
  < %
}
else
{ %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>'] < %
}
%>
< %
if (!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation. < %= viewEncapsulation % > < %
}
if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy. < %= changeDetection % > < %
}
%>
})

export class

< %= componentName % > implements
OnInit
{

  constructor(private
  http: _HttpClient, private
  msg: NzMessageService
)
  {
  }

  ngOnInit()
  {
  }

}
