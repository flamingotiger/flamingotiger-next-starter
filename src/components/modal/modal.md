# Modal

>- [구조](#structure)
>- [사용법](#usage)

## structure
구조는 다음 세가지로 분류 되어있습니다.
- component
- helper
- hooks

`component`는 모달의 커스텀 모드 입니다.
confirm, message등 기본적으로 사용되는 modal로 스타일이 적용되어 있습니다.

`helper`는 factory가 있습니다. ReactDOM.render를 이용해서 구현하였고, 모달의 render와 update, destory등의 메소드를 통해서 생성과 삭제가 작동하고, config를 통해서 props로 컴포넌트에 전달합니다. 

`hooks`는 modal의 열고 닫음의 기능을 가진 훅스를 저장해 놓은 폴더 입니다. 

## usage

사용방법은 두가지가 있습니다. 첫번째로는 기본적으로 만들어놓은 템플릿을 이용한 것이고, 두번째로는 자유롭게 커스텀한 모달입니다.

### 템플릿

```typescript helper/factory.tsx
export const confirm = (config?: Factory) => factory({ ...config, Component: Confirm });
```

```typescript 
import { confirm } from 'src/components/modal/helper/factory';

<button type="button" onClick={() => confirm({})}>
	Modal Button
</button>
```

### 커스텀
```typescript 
import Warning from 'src/components/modal/components/Warning';
import { base } from 'src/components/modal/helper/factory';

<button type="button" onClick={() => base({ Component: Warning, message: '경고입니다.' })}>
	Warning Button
</button>
```
props를 간편하게 넘겨줄 수 있습니다.