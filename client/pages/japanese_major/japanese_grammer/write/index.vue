<template>
    <div>
        <span>モデル選択</span>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                朝日
            </label>
        </div>
        <div class="input-group">
        <span class="input-group-text">キーワード(一つずつ)</span>
        <textarea class="form-control" aria-label="With textarea">朝日</textarea>
        </div>
        <button>
            もっとキーワード
        </button>
        <br />
        <button>
            作ろう
        </button>
        <div class="input-group">
        <span class="input-group-text">出来だ</span>
        <textarea class="form-control" aria-label="With textarea">朝日を浴びて車に光が反射する。</textarea>
    </div>
</div>
  </template>