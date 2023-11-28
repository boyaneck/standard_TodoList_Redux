# 2회차 

- 이전 코드 지우고 처음붜 다시 구조잡기
- redux/config -> configstore
- redux/modules -> reducer
- pages -> home, detail  ->navigator 이용해서 detail 페이지로 parameter 전달

### 결론:리덕스 파일 구조나 actionCreator,reducer,payload 등 어떻게 사용해야 할지는 다 이해가는데, return 문에서 로직짜는게 햇갈렸다;;;





## 😢 필수 요구사항

- (1) Redux 라이브러리 세팅
    - [1] src > redux > modules > todos.js(리듀서)
        - initialState를 사용하여 리듀서 구성
               
        - 총 3개의 action type을 생성
            - ADD_TODO(추가)
            - DELETE_TODO(삭제)
            - SWITCH_TODO(완료 / 취소)
    - [2] src > redux > config > configStore.js
        - combineReducers 이용하여 모든 리듀서 합치기(우리의 경우 todos밖에 없음)
        - createStore를 이용하여 store 생성 후 export(내보내기)
    - [3] src > index.js
        - react-redux에서 제공하는 Provider를 이용하여 [2]에서 생성한 store를 프로젝트에 주입
- (2) React router dom 라이브러리
    - [1] src > shared > Router.jsx
        - BrowserRouter, Routes, Route를 이용하여 페이지 세팅
            - 홈
                - path : “/”
                - component(element) : src > pages > Home.jsx
            - 상세정보
                - path : “/:id”
                - component(element) : src > pages > Detail.jsx
    - [2] App.jsx
        - [1]에서 생성한 Router를 import하여 직접 호출(App.jsx의 자식컴포넌트로 사용)
- (3) Styled-components 라이브러리
    - `npm i styled-components` 또는 `yarn add styled-components` 명령어 이용하여 패키지 설치
    - css 사용해야 하면 inline 방식이 아닌 styled components 방식으로 컴포넌트 디자인
- (4) 메인페이지, 상세페이지
    - 메인페이지
        - src > pages > Home.jsx
        - 요구사항
            - 제목, 내용 입력 후 추가하기 버튼 누르면 todolist item 하나 추가
            - TodoList
                - redux store에서 데이터 가져오기(useSelector)
                - 상세페이지로 가기 버튼 : useNavigate 이용
                - todo 제목
                - todo 내용
                - 완료버튼 : 선택 시, DoneList로 이동
                - 삭제버튼 : 해당 아이템 제거
            - DoneList → TodoList에 반대(완료버튼은 취소버튼으로)
    - 상세페이지
        - src > pages > Detail.jsx
        - 요구사항
            - redux store에서 데이터 가져오기(useSelector 및 useLocation 이용하여 선택한 요소 가져오기)
            - 제목, 내용, 완료여부 출력
            - 이전화면으로 버튼 : useNavigate 이용
            - 삭제 버튼 : 해당 아이템 제거 후 Main.jsx로 이동
