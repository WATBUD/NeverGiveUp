        // switch (rangeMode) {
        //     case 'Inner':
        //         clearInterval(this.stopVar[TempName[0]]);
        //         break;
        //     case 'Outer':
        //         clearInterval(this.stopVar[TempName[1]]);
        //         break;
        //     case 'OverAll':
        //         clearInterval(this.stopVar[TempName[0]]);
        //         clearInterval(this.stopVar[TempName[1]]);
        //         break;
        //     default:
        //         alert('stopAnimation error'+rangeMode);
        //         break;
        // }
        //clearInterval(this.stopVar[this.elementsName]);


        // stopAnimation(rangeMode) {
        //     var TempName=this.elementsName;
        //     clearInterval(this.stopVar[TempName[0]]);
        //     clearInterval(this.stopVar[TempName[1]]);
        //     clearInterval(this.stopVar[TempName[2]]);
        //     var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        //     var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        //     for (let index = 0; index < innerArr.length; index++) {
        //         innerArr[index].style.background = this.getColorEffectValue([0,0,0,0], 1);
        //     }
        //     for (let index = 0; index < outerArr.length ; index++) {
        //         outerArr[index].style.background = this.getColorEffectValue([0,0,0,0], 1);
        //     }
    
        // }


                // var returnData;
        // switch (modeType) {
        //     case 'Inner':
        //         returnData = effectDataArray[0];
        //         this.AL_EffectModule.mode_Static_Color(effectDataArray[0],modeType);
        //         this.AL_EffectModule.mode_Static_Color(effectDataArray[1],modeType);
        //         break;
        //     case 'Outer':
        //         returnData = effectDataArray[1];                
        //         break;
        //     case 'OverAll':
        //         returnData = effectDataArray[2];
        //         break;    
        //     default:
        //         returnData = effectDataArray[2];

        //         break;
        // }




//         <!-- <div id="SharedMask" [style.display]="onAppImportExport||noticeShow?'flex':'none'">
//         <div *ngIf="noticeShow" class="NoticeUI">
//             <div class="NoticeUI_OK" (mouseenter)="NoticeOKleave=true;"
//                 (mouseleave)="NoticeOKleave=false;SharesFN.logCustom('NoticeOKleave',NoticeOKleave);"
//                 (click)="closeUITip()" [style.background-color]="NoticeOKleave==true?'#17beff':'#2c3647'">
//                 {{i18nManager.getTarget('OK')}}
//             </div>
//             <div class="NoticeUI_Icon"></div>
//             <div class="NoticeUI_Title">{{Notice_Mes.title}}</div>
//             <div class="NoticeUI_Content">
//                 <span [innerHtml]="Notice_Mes.content" (click)="HyperLinkGO(0)"></span>
//                 <span *ngIf="Notice_Mes.showType=='ConnectError'" (click)="HyperLinkGO(0)"
//                     style="text-decoration: underline;">{{this.i18nManager.getTarget('HyperLink')}}
//                 </span>
//                 <div *ngIf="Notice_Mes.showType=='InitExportTip'"
//                     style="align-items: center;display: flex;margin-top: 1vw;">
//                     <input type="checkbox" [(ngModel)]="SettingData.notShowAgainExport" />
//                     <span
//                         style="margin-left: 2%;font-size: 2.1vh;">{{this.i18nManager.getTarget('DoNotShowAgain')}}</span>
//                 </div>
//                 <div *ngIf="Notice_Mes.showType=='StaticMax48Tip'"
//                     style="align-items: center;display: flex;margin-top: 1vw;">
//                     <input type="checkbox" [(ngModel)]="notShowAgainStaticTip" />
//                     <span
//                         style="margin-left: 2%;font-size: 2.1vh;">{{this.i18nManager.getTarget('DoNotShowAgain')}}</span>
//                 </div>
//             </div>
//         </div>
//     </div> -->