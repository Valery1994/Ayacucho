(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[51723],{774226:(e,r,o)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/[username]/[slug]/_tools/more-ideas"]=function(){return o(958455).Z}},501817:(e,r,o)=>{o.d(r,{O:()=>a,Q:()=>s});var t=o(588028),n=o(280773),d=o(414327);const i=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],a={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:r,mixPublicSecret:o,username:t},n)=>({privacy_filter:"all",sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:r,username:t,page_size:25,group_by:o?"mix_public_private":"visibility",include_archived:!0,redux_normalize_feed:!0,...n?{orbac_subject_id:n}:Object.freeze({})})},s=e=>i.reduce(((r,o)=>{const i=[(0,n.Z)("profileBoards",(0,t.O)(e,o))];return[!0,!1].forEach((r=>{[!0,!1].forEach((t=>{i.push((0,d.jB)(a.name,a.options({username:e,boardOrder:o,mixPublicSecret:r,filterStories:t})))}))})),r.concat(i)}),[])},275700:(e,r,o)=>{o.d(r,{Z:()=>n});var t=o(784590);function n(e,r){const{data:o,refresh:n}=(0,t.Z)({name:"BoardResource",options:{username:r,slug:unescape(e||""),field_set_key:"detailed"}});return{board:o,refresh:n}}},863098:(e,r,o)=>{o.d(r,{Z:()=>s});var t=o(667294),n=o(966338),d=o(965261),i=o(273022),a=o(925927);function s(){const e=(0,n.useDispatch)(),r=(0,a.k6)(),{pathname:o}=(0,a.TH)(),s=(0,n.useSelector)((({ui:e})=>e.mainComponent.locationToErrorMap));(0,t.useEffect)((()=>{(0,d.Z)();const t=`/${o.split("/")[1]}/`;s[o]&&(e((0,i.m)(t,s[o])),r.replace(t))}),[])}},497258:(e,r,o)=>{o.d(r,{Z:()=>a});var t=o(667294),n=o(4294),d=o(19121),i=o(925927);function a(e){const r=(0,d.Z)(),o=(0,i.k6)();(0,t.useEffect)((()=>{var t;const d=null!==(t=e&&(0,n.Z)({board:e,viewer:r}))&&void 0!==t&&t;var i;e&&!d&&o.push(null!==(i=e.url)&&void 0!==i?i:"")}),[e])}},683190:(e,r,o)=>{o.d(r,{Fi:()=>f,K8:()=>l,Tq:()=>c,YV:()=>I,oL:()=>_,xH:()=>p,xk:()=>u});var t=o(280773),n=o(6637),d=o(935409),i=o(281615),a=o(379725),s=o(501817);function c(e,r){return(0,a.U2)("BoardResource",{options:{board_id:e,field_set_key:r}})}function _(e={},r,o){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:r},error:o}}function l(e){return r=>{e&&(0,s.Q)(e).forEach((e=>{r(e)}))}}function u(e){return r=>(r(function(e){return{type:"BOARD_ARCHIVED",payload:{boardId:e}}}(e)),n.ZP.create("BoardArchiveResource",{boardId:e}).callUpdate())}function I(e){return r=>(r(function(e){return{type:"BOARD_UNARCHIVED",payload:{boardId:e}}}(e)),n.ZP.create("BoardArchiveResource",{boardId:e}).callDelete())}function p(e,r){return o=>n.ZP.create("BoardsMergeResource",{source_board_id:e,target_board_id:r}).callUpdate().then((()=>Promise.all([o((0,d.eo)({boardId:e})),o(c(r,"pin_count")),o((0,t.Z)(i.DV.BOARD_SECTIONS,r))])))}function f(e){return{type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}}},280773:(e,r,o)=>{function t(e,r){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:r}}}o.d(r,{Z:()=>t})},273022:(e,r,o)=>{function t(e,r){return{type:"SET_LOCATION_TO_ERROR_MAP_ENTRY",payload:{pathname:e,renderError:r}}}function n(e){return{type:"UNSET_LOCATION_TO_ERROR_MAP_ENTRY",payload:{pathname:e}}}o.d(r,{L:()=>n,m:()=>t})},843747:(e,r,o)=>{o.d(r,{Z:()=>f,S:()=>p});var t=o(417498),n=o(280773),d=o(820384),i=o(674578),a=o(6637),s=o(683190),c=o(281615),_=o(124237);const l=e=>r=>{_.Z.showError(function(e,r){switch(e.api_error_code){case 2171:case 2172:case 2173:return r._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(r,e))},u=e=>(0,n.Z)(e.sectionId?c.DV.SECTION_PINS:c.DV.BOARD_PINS,e.sectionId||e.boardId);function I(e,r){const{source:o,target:n}=e;n.boardId!==o.boardId?(r((0,s.Tq)(o.boardId,"pin_count")),r((0,s.Tq)(n.boardId,"pin_count"))):o.sectionId&&n.sectionId||r((0,s.Tq)(n.boardId,"pin_count")),o.sectionId&&r((0,t.Z)(o.sectionId)),n.sectionId&&r((0,t.Z)(n.sectionId))}function p(e){return r=>{const{selectedPinIds:o,source:t,target:n}=e;r((0,i.Z)({feedId:t.sectionId||t.boardId,feedType:t.sectionId?c.DV.SECTION_PINS:c.DV.BOARD_PINS,itemIds:o,itemType:"pin"})),r((0,d.Z)({feedId:n.sectionId||n.boardId,feedType:n.sectionId?c.DV.SECTION_PINS:c.DV.BOARD_PINS,itemIds:o,itemType:"pin"})),I(e,r)}}function f(e,r){return o=>function(e,r,o){const{inverseSelection:t,selectedPinIds:n,source:s,target:_}=e;if(s.boardId===_.boardId&&(s.sectionId||null)===(_.sectionId||null))return Promise.reject();if(t){const e={board_id:s.boardId,new_board_id:_.boardId,old_section_id:s.sectionId||void 0,new_section_id:_.sectionId||void 0,pin_ids:n};return a.ZP.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([r(u(s)),r(u(_))]))).catch(l(o))}{const e=(e,o)=>{r((0,i.Z)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?c.DV.SECTION_PINS:c.DV.BOARD_PINS,itemIds:n,itemType:"pin"})),r((0,d.Z)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?c.DV.SECTION_PINS:c.DV.BOARD_PINS,itemIds:n,itemType:"pin"}))};e(s,_);const t=()=>e(_,s);if(_.boardId===s.boardId){if(_.sectionId){const e={section_id:_.sectionId,pins:n};return a.ZP.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{t(),l(o)(e)}))}{const e={section_id:s.sectionId,pins:n};return a.ZP.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{t(),l(o)(e)}))}}{const e={board_id:_.boardId,section_id:_.sectionId||void 0,pin_ids:n};return a.ZP.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{t(),l(o)(e)}))}}}(e,o,r).then((()=>I(e,o)))}},4392:(e,r,o)=>{o.d(r,{Z:()=>l,h:()=>_});var t=o(280773),n=o(820384),d=o(843747),i=o(6637),a=o(683190),s=o(281615),c=o(414327);function _(e,r){return{type:"SECTION_ADDED",payload:{boardId:e,section:r}}}function l({boardId:e,name:r,nameSource:o,pinImport:l,initialPinIds:u=[]},I,p){let f=0;"RECOMMENDATION"===o?f=1:"EDITED_RECOMMENDATION"===o&&(f=2);const b={board_id:e,initial_pins:l&&!l.all?l.pinIds:u,name:r,name_source:f,...p?{orbac_subject_id:p}:Object.freeze({})};return r=>i.ZP.create("BoardSectionResource",b).callCreate({showError:!1}).then((({resource_response:{data:o}})=>{r(_(e,o)),r((0,n.Z)({feedId:e,feedType:s.DV.BOARD_SECTIONS,itemIds:[o.id],itemType:"board_section"})),r((0,a.Tq)(e,"pin_count")),r((0,c.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:i,pinIds:u}=l||{all:!1,pinIds:[]};return i?new Promise(((t,n)=>r((0,d.Z)({inverseSelection:!0,selectedPinIds:u,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:o.id}},I)).then((()=>t(o))).catch(n))):(u.length>0&&r((0,t.Z)(s.DV.BOARD_PINS,e)),o)}))}},417498:(e,r,o)=>{o.d(r,{Z:()=>n});var t=o(379725);function n(e,r){return o=>o((0,t.U2)("BoardSectionResource",{options:{field_set_key:r||"board_page",section_id:e}}))}},965261:(e,r,o)=>{o.d(r,{Z:()=>i});var t=o(6637);const n=e=>t.ZP.create("InviteAttributionResource",{invite_code:e}).callCreate();var d=o(826067);const i=(e=(e=>{}))=>{const r=(0,d.mB)(window.location.search),o=r.invite_code;o?n(o):e(r)}},232843:(e,r,o)=>{o.d(r,{H:()=>n,W:()=>d});var t=o(425288);const{Provider:n,useMaybeHook:d}=(0,t.Z)("PinCreateDeleteContext")},958455:(e,r,o)=>{o.d(r,{Z:()=>b});var t=o(667294),n=o(330470),d=o(707210),i=o(4294),a=o(275700),s=o(863098),c=o(497258),_=o(898781),l=o(19121),u=o(826067),I=o(883119),p=o(925927),f=o(785893);function b(e){var r;const o=(0,_.ZP)(),{username:b,slug:E}=(0,p.UO)(),D=(0,l.Z)(),O=(0,p.TH)(),{board:m}=(0,a.Z)(E,b);(0,c.Z)(m),(0,s.Z)();const S=(0,u.mB)(O.search);return(0,f.jsxs)(t.Fragment,{children:[(0,f.jsx)(I.$j,{accessibilityLabel:o._('Loading More Ideas', 'BoardMoreIdeasToolPage.Spinner', 'Accessibility label on spinner'),show:!m}),!!m&&(0,f.jsxs)(t.Fragment,{children:[(0,f.jsx)(d.Z,{board:m,headerText:o._('More ideas', 'BoardOrganizationContainer.Heading', 'Title of more ideas page'),url:null!==(r=m.url)&&void 0!==r?r:""}),(0,f.jsx)(n.ZP,{collection:m,from_news_id:S.from_news_id,ideasReferrer:S.ideas_referrer,reducePadding:!0,viewerIsOwnerOrCollaborator:(0,i.Z)({board:m,viewer:D})})]})]})}}},e=>{e.O(0,[51723],(()=>{[97270,69965,77638,92982,90732,14166,42150,48035,5035,43473,22347,22538,1593].map(e.E)}),5);e.O(0,[97270,83119,67631,66113,62015,25927,42082,85058,48358,54372,88273,58150,25643,4066,57472,83046,69853,68290,3535,57098],(()=>{return r=774226,e(e.s=r);var r}));e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/[username]/[slug]/_tools/more-ideas-authdesktop-68f76c9083609629.mjs.map