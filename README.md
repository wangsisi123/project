
# 员工信息管理系统

### 员工信息管理系统数据接口

# 技术：

### 前端技术：html css vue axios ElementUI

### 后端技术：node.js(express,url,express-static,mysQl)

# 测试地址：

### [http://39.96.185.39:8080/studentdata.html](http://39.96.185.39:8080/studentdata.html)

## 获取数据接口

### 接口地址：公网：[http://39.96.185.39:8080/chaxun](http://39.96.185.39:8080/chaxun)

### 返回格式：json

### 请求方式：get http

### 请求示例:[http://39.96.185.39:8080/chaxun](http://39.96.185.39:8080/chaxun)

## 请求参数说明:无

## 返回参数说明：

<table>
   <thead>
         <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
   </thead>
   <tbody>
        <tr>
            <td>ID</td>
            <td>int</td>
            <td>员工序号</td>
        </tr>
         <tr>
            <td>name</td>
            <td>string</td>
            <td>员工姓名</td>
        </tr>
         <tr>
            <td>sex</td>
            <td>int</td>
            <td>员工性别</td>
        </tr>
         <tr>
            <td>birthday</td>
            <td>date</td>
            <td>员工生日</td>
        </tr>
         <tr>
            <td>status</td>
            <td>int</td>
            <td>员工在职状态</td>
        </tr>
         <tr>
            <td>joinData</td>
            <td>date</td>
            <td>员工入职时间</td>
        </tr>
          <tr>
            <td>leaveData</td>
            <td>date</td>
            <td>员工离职时间</td>
        </tr>
          <tr>
            <td>salary</td>
            <td>int</td>
            <td>员工薪资</td>
        </tr>
         <tr>
            <td>IDCard</td>
            <td>int</td>
            <td>员工身份证号码</td>
        </tr>
         <tr>
            <td>number</td>
            <td>int</td>
            <td>员工手机号</td>
        </tr>
   </tbody>
</table>

## 删除数据接口

### 接口地址：公网：[http://39.96.185.39:8080/deleteuser](http://39.96.185.39:8080/deleteuser)

### 返回格式：json

### 请求方式：get http

### 请求示例:[http://39.96.185.39:8080/deleteuser?ID="+id](http://39.96.185.39:8080/deleteuser?ID="+id)

### 请求参数说明:

#### id:要删除员工的ID

### 返回参数说明：

<table>
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>succcess</td>
            <td>string</td>
            <td>返回数据成功</td>
        </tr>
         <tr>
            <td>error</td>
            <td>string</td>
            <td>返回数据失败</td>
        </tr>
    </tbody>
</table>

## 添加数据接口

### 接口地址：公网：[http://39.96.185.39:8080/addData2r](http://39.96.185.39:8080/addData2)

### 返回格式：json

### 请求方式：get http

### 请求示例:[http://39.96.185.39:8080/addData2r](http://39.96.185.39:8080/addData2)

## 请求参数说明:

<table>
   <thead>
         <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
   </thead>
   <tbody>
        <tr>
            <td>ID</td>
            <td>int</td>
            <td>员工序号</td>
        </tr>
         <tr>
            <td>name</td>
            <td>string</td>
            <td>员工姓名</td>
        </tr>
         <tr>
            <td>sex</td>
            <td>int</td>
            <td>员工性别</td>
        </tr>
         <tr>
            <td>birthday</td>
            <td>date</td>
            <td>员工生日</td>
        </tr>
         <tr>
            <td>status</td>
            <td>int</td>
            <td>员工在职状态</td>
        </tr>
         <tr>
            <td>joinData</td>
            <td>date</td>
            <td>员工入职时间</td>
        </tr>
          <tr>
            <td>leaveData</td>
            <td>date</td>
            <td>员工离职时间</td>
        </tr>
          <tr>
            <td>salary</td>
            <td>int</td>
            <td>员工薪资</td>
        </tr>
         <tr>
            <td>IDCard</td>
            <td>int</td>
            <td>员工身份证号码</td>
        </tr>
         <tr>
            <td>number</td>
            <td>int</td>
            <td>员工手机号</td>
        </tr>
   </tbody>
</table>

## 返回参数说明：

<table>
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>succcess</td>
            <td>string</td>
            <td>返回数据成功</td>
        </tr>
         <tr>
            <td>error</td>
            <td>string</td>
            <td>返回数据失败</td>
        </tr>
    </tbody>
</table>

## 修改数据接口

### 接口地址：公网：[http://39.96.185.39:8080/sure](http://39.96.185.39:8080/sure)

### 返回格式：json

### 请求方式：get http

### 请求示例:[http://39.96.185.39:8080/sure](http://39.96.185.39:8080/sure)

## 请求参数说明:

<table>
   <thead>
         <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
   </thead>
   <tbody>
        <tr>
            <td>ID</td>
            <td>int</td>
            <td>员工序号</td>
        </tr>
         <tr>
            <td>name</td>
            <td>string</td>
            <td>员工姓名</td>
        </tr>
         <tr>
            <td>sex</td>
            <td>int</td>
            <td>员工性别</td>
        </tr>
         <tr>
            <td>birthday</td>
            <td>date</td>
            <td>员工生日</td>
        </tr>
         <tr>
            <td>status</td>
            <td>int</td>
            <td>员工在职状态</td>
        </tr>
         <tr>
            <td>joinData</td>
            <td>date</td>
            <td>员工入职时间</td>
        </tr>
          <tr>
            <td>leaveData</td>
            <td>date</td>
            <td>员工离职时间</td>
        </tr>
          <tr>
            <td>salary</td>
            <td>int</td>
            <td>员工薪资</td>
        </tr>
         <tr>
            <td>IDCard</td>
            <td>int</td>
            <td>员工身份证号码</td>
        </tr>
         <tr>
            <td>number</td>
            <td>int</td>
            <td>员工手机号</td>
        </tr>
   </tbody>
</table>

## 返回参数说明：

<table>
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>succcess</td>
            <td>string</td>
            <td>返回数据成功</td>
        </tr>
         <tr>
            <td>error</td>
            <td>string</td>
            <td>返回数据失败</td>
        </tr>
    </tbody>
</table>


